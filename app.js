require('dotenv').config()

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const {createServer} = require('http');
const fetch = require('node-fetch');
const next = require('next');
const {parse} = require('url');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production'
const handler = next({dev});
const handle = handler.getRequestHandler();

var uri = process.env.DB_URI

var switchData;
var fetchSwitches = new Promise((resolve,reject) =>{
  if (switchData) resolve (switchData);

  MongoClient.connect(uri, function(err, db) {
    var switchCollection = db.collection('Switches');
    switchCollection.find().toArray(function(err, data) {
      db.close();
      if(err) reject(err)
      else {
        switchData = data
        resolve(switchData);
      }
    })
  });
})

function updateSwitch(targetSwitch, state){
  return new Promise((resolve, reject)=>{
      MongoClient.connect(uri, function(err, db) {
        console.log(state)
        var switchCollection = db.collection('Switches');
        switchCollection.updateOne({_id: targetSwitch._id}, {$set:{
          state: state
        }}).then(value=>{
          switchCollection.findOne({_id: targetSwitch._id}).then((result)=>{
            switchData.forEach((value, index)=>{
              if (value._id === targetSwitch._id){
                value.state = result.state;
              }
              if (value.group === "ifttt"){
                fetch(`https://maker.ifttt.com/trigger/${value.trigger}_${value.state}/with/key/${process.env.IFTTT_KEY}`,
                {method: "POST", body: JSON.stringify({})})
                .then(res=>{
                  if (res.status === 200) {
                    console.log("successfully triggered IFTTT");
                    console.log(result);
                    resolve(result)
                  }
                  else reject(res);
                })
                .catch(err=>{
                  reject(err);
                })
              }
              else if (value.group === "strip" && process.env.ENV ==="production"){
                fetch(`http://10.0.1.5/api/switches/${value.switch_num}?password=${process.env.PASSWORD}&command=${value.state}`, {
                  method: "POST"
                })
                .then(res=>{
                  if (res.status === 200) {
                    console.log("successfully triggered IFTTT");
                    console.log(result);
                    resolve(result)
                  }
                  else reject(res);
                })
                .catch(err=>{
                  reject(err);
                })
              }
              else {
                console.log(result);
                resolve (result)
              }
            })
          })
        })
        .catch(err =>{
          console.log(err)
        })
      })
  })
}

function emitSwitchChange(switchState){
  io.emit('switch update', switchState)
}
handler
  .prepare()
  .then(() => {
    const app = express();
    const http = require('http').Server(app);
    const io = require('socket.io')(http);

    app.use(express.static(__dirname + '/.next'));
    // app.use(express.static(__dirname + '/public'));
    
    app.get('/api/switches', (req, res)=>{
      if (switchData){
        res.json(switchData);
      }
      else res.send('failure')
    })

    app.post('/api/switches/:id', (req,res)=>{
      var id = req.params.id;
      var command = req.params.command;

      let targetSwitch = switchData.filter(value=>{
        return value.switch_num === id;
      })[0]
      if (!command) {
        command = targetSwitch.state === "on" ? "off" : "on"
      }

      updateSwitch(targetSwitch, command).then((value)=>{
        emitSwitchChange(value);
      }).catch(err=>{console.error(err)})
      res.send('updating switch')
    })

    // app.get('/strip', (req, res)=>{
    //   res.sendFile('/stat/index')
    // })

    // app.get("*", (req, res)=>{
    //   return handle(req, res);
    // })

    http.listen(process.env.PORT, function () {
      console.log('Listening on port ' + process.env.PORT);
    })
  })


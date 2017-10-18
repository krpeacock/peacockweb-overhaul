require('dotenv').config()

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

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
            })
            console.log ("result", result)
            resolve(result)
          })
        })
        .catch(err =>{
          console.log(err)
        })
      })
  })
}

app.use(express.static(__dirname + '/client'));

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
    res.json(value)
  }).catch(err=>{console.error(err)})
})

app.get('*', (req, res)=>{
  res.sendFile('index')
})

app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + process.env.PORT);
})

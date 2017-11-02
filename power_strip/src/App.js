import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const socket = openSocket('http://localhost:3000');

class App extends Component {
  state = {
    switches: []
  }
  componentDidMount(){
    fetch('/api/switches', (response)=>{
      return response.blob();
    }).then((switchBlob)=>{
        switchBlob.json().then((switches)=>{
          this.setState({switches})
        })
    }).catch(err=>{
      console.log('error: ', err)
      this.setState({offline: true});
    })
    // Subscribe to switch change socket
    socket.on('switch update', switchData => {
      let switchMap = this.state.switches.map((val)=>{
        if (val._id === switchData._id) return switchData;
        else return val;
      })

      this.setState({switches: switchMap});
    });
  }
  toggleSwitch(target){
    let postRequest = new Request(`/api/switches/${target.switch_num}`,{method: 'POST'});
    fetch(postRequest, (response)=>{
      return response.blob();
    }).then((responseBlob)=>{
      if (responseBlob.status === 200) this.setState({updating: "true"})
    })
    .catch(err=>{console.error(err)})
  }
  
  render() {
    let switchesList = this.state.switches.map(value=>{
      return (
        <div className="switch-container" key={value._id}>
          <div 
            className={`switch ${value.state === "on"?"switch--on":"switch--off"}`} 
            onClick={()=>this.toggleSwitch(value)}
          ></div>
          <p className="switch-name">{value.name}</p>
        </div>
      )
    })
    let offlineWarning = <p>You are currently offline</p>
    return (
      <div className="App">
        <h1 id="app-title">Power Strip</h1>
        <section id="switches-list">
          {switchesList}
        </section>
        {this.state.offline ? offlineWarning : null}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  }
  toggleSwitch(target){
    let postRequest = new Request(`/api/switches/${target.switch_num}`,{method: 'POST'});
    fetch(postRequest, (response)=>{
      return response.blob();
    }).then((responseBlob)=>{
      responseBlob.json().then(response=>{
        let switchData = this.state.switches;
        switchData[switchData.indexOf(target)] = response
        this.setState({switches: switchData})
      })
      .catch(err=>{console.error(err)})
    })
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

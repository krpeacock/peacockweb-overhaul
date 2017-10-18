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
    })
  }
  toggleSwitch(target){
    let postRequest = new Request(`/api/switches/${target.switch_num}`,{method: 'POST'});
    fetch(postRequest, (response)=>{
      return response.blob();
    }).then((responseBlob)=>{
      responseBlob.json().then(response=>{alert(JSON.stringify(response))})
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
    return (
      <div className="App">
        <h1 id="app-title">Power Strip</h1>
        <section id="switches-list">
          {switchesList}
        </section>
      </div>
    );
  }
}

export default App;

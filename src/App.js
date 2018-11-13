import React, { Component } from 'react';
import './App.css';
import AllJobs from './Components/AllJobs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jobs </h1>
        </div>
        <AllJobs />
      </div>
    );
  }
}

export default App;

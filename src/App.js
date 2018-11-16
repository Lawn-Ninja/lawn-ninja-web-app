import React, { Component } from "react";
import "./App.css";
import AllJobs from "./Components/AllJobs";
import NewUser from "./Components/NewUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jobs </h1>
        </div>
        <NewUser />
        <AllJobs />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import AllJobs from "./Components/AllJobs";
import NewUser from "./Components/NewUser";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jobs </h1>
        </div>
        <Login />
        <NewUser />
        <AllJobs />
      </div>
    );
  }
}

export default App;

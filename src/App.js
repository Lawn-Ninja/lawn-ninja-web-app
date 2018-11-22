import React, { Component } from "react";
import "./App.css";
import AllJobs from "./Components/AllJobs";
import NewUser from "./Components/NewUser";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jobs </h1>
        </div>

        {/* BEGINNING OF LANDING PAGE SAMPLES */}
        Logged In, Not a Provider:
        <LandingPage loggedIn={true} provider={false} />
        Logged In, Provider:
        <LandingPage loggedIn={true} provider={true} />
        Logged Out:
        <LandingPage loggedIn={false} />
        {/* END OF LANDING PAGE SAMPLES */}

        <Login />
        <NewUser />
        <AllJobs />
      </div>
    );
  }
}

export default App;

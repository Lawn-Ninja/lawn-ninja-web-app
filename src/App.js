import React, { Component } from "react";
import "./App.css";
import AllJobs from "./Components/AllJobs";
import NewUser from "./Components/NewUser";
<<<<<<< HEAD
import LandingPage from "./Components/LandingPage";
=======
import Login from "./Components/Login";
>>>>>>> d31c93e5c75af8f3d87d712f3d1ef7f6874fb87e

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jobs </h1>
        </div>
<<<<<<< HEAD

        {/* BEGINNING OF LANDING PAGE SAMPLES */}
        Logged In, Not a Provider:
        <LandingPage loggedIn={true} provider={false} />
        Logged In, Provider:
        <LandingPage loggedIn={true} provider={true} />
        Logged Out:
        <LandingPage loggedIn={false} />
        {/* END OF LANDING PAGE SAMPLES */}

=======
        <Login />
>>>>>>> d31c93e5c75af8f3d87d712f3d1ef7f6874fb87e
        <NewUser />
        <AllJobs />
      </div>
    );
  }
}

export default App;

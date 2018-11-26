import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home";
// import LandingPage from "./Components/LandingPage";
// import JobsList from "./Components/AllJobs";
import MyJobs from "./Components/MyJobs";
import JobsNearMe from "./Components/JobsNearMe";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />

          {/* <LandingPage /> */}
          {/* <JobsList jobs={[]}/> */}
          <MyJobs />
          <JobsNearMe />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

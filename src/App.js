import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home";

// import LandingPage from "./Components/LandingPage";
// import AllJobs from "./Components/AllJobs";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />

          {/* <LandingPage /> */}
          {/* <AllJobs /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

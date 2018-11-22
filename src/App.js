import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home";

// import LandingPage from "./Components/LandingPage";
// import AllJobs from "./Components/AllJobs";
// import NewUser from "./Components/NewUser";
// import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
          {/* <LandingPage /> */}
          {/* <Login /> */}
          {/* <NewUser /> */}
          {/* <AllJobs /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

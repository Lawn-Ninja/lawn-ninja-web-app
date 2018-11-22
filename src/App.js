import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom"
import "./App.css";
// import AllJobs from "./Components/AllJobs";
import NewUser from "./Components/NewUser";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <nav className='navbar'>
              <div className='logo'>
                Lawn<span>Ninja</span>
              </div>
              <ul>
                <li>
                  <a href="/" className="hover_link">HOME</a>
                </li>
                <li>
                  <a href="/" className="hover_link">ABOUT US</a>
                </li>
                <li>
                  <a href="/" className="hover_link">CONTACT US</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* BEGINNING OF LANDING PAGE SAMPLES */}
          Logged Out:
          <LandingPage />
          {/* END OF LANDING PAGE SAMPLES */}

          <Login />
          <NewUser />
          {/* <AllJobs /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

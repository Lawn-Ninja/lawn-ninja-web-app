import React, { Component } from "react";
// import axios from "axios";
import { Route, Link } from "react-router-dom";

import "./Home.css";
import LandingPage from "../Components/LandingPage";
import Login from "../Components/Login";
import NewUser from "../Components/NewUser";
import Logout from "../Components/Logout";
import JobsNearMe from "../Components/JobsNearMe";
import MyJobs from "../Components/MyJobs";
import JobDetailsPage from "../Components/JobDetailsPage";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="header">
          <nav className="navbar">
            <div className="logo">
              Lawn<span>Ninja</span>
            </div>
            <ul>
              <li>
                <Link to="/" className="hover_link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover_link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover_link">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/logout" className="hover_link">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={NewUser} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/jobs" exact component={JobsNearMe} />
        <Route path="/my_jobs" exact component={MyJobs} />
        <Route path="/jobs/:id" exact component={JobDetailsPage} />
      </div>
    );
  }
}

export default Home;

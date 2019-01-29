import React, { Component } from "react";
// import axios from "axios";
import { Route, Link } from "react-router-dom";

import "./Home.css";
import LandingPage from "../Components/LandingPage";
import Login from "../Components/Login";
import NewConsumer from "../Components/NewConsumer";
import Logout from "../Components/Logout";
import JobsNearMe from "../Components/JobsNearMe";
import MyJobs from "../Components/MyJobs";
import JobDetailsPage from "../Components/JobDetailsPage";
import NewJob from "../Components/NewJob";

class Home extends Component {
  render() {
    return (
      // <div class="container">
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <button
            className="navbar-toggler navbar-toggler-left"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand">
            Lawn<span className="logo-accent">Ninja</span>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav align-items-end">
              <Link to="/login" className="nav-item nav-link active">
                Login
              </Link>
              <Link to="/signup" className="nav-item nav-link active">
                Signup
              </Link>
              <Link to="/logout" className="nav-item nav-link active">
                Logout <span className="sr-only">(current)</span>
              </Link>
              {/* <a class="nav-item nav-link" href="#projects">Projects</a> */}
            </div>
          </div>
        </nav>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={NewConsumer} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/jobs" exact component={JobsNearMe} />
        <Route path="/my_jobs" exact component={MyJobs} />
        <Route path="/new_job" exact component={NewJob} />
        <Route path="/jobs/:id" exact component={JobDetailsPage} />
      </div>
      // </div>
    );
  }
}

export default Home;

// <div className="Home">
//   <div className="header">
//     <nav className="navbar">
//       <div className="logo">
//         Lawn<span>Ninja</span>
//       </div>
//       <ul>
//         <li>
//           <Link to="/" className="hover_link">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" className="hover_link">
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link to="/signup" className="hover_link">
//             Sign Up
//           </Link>
//         </li>
//         <li>
//           <Link to="/logout" className="hover_link">
//             Logout
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   </div>

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import NewJob from "./NewJob";

import "../App.css";
import "./LandingPage.css";

class landingPage extends Component {
  constructor() {
    super();
    this.state = {
      userButtons: null,
      providerButtons: null,
      consumerButtons: null
    };
  }

  buttons = () => {
    if (localStorage.getItem("id_token") !== "undefined") {
      this.setState({
        userButtons: (
          <div>
            <p>
              <button className="btn btn-success">
                <Link to="/my_jobs" className="hover_link">
                  My Jobs
                </Link>
              </button>
            </p>
          </div>
        )
      });

      if (localStorage.getItem("provider_status") === "true") {
        this.setState({
          providerButtons: (
            <div>
              <p>
                <button className="btn btn-success">
                  <Link to="/jobs" className="hover_link">
                    Jobs Near Me
                  </Link>
                </button>
              </p>
              <p>
                <button
                  className="btn btn-success"
                  onClick={this.toggleProviderStatus}
                >
                  Become a Consumer
                </button>
              </p>
            </div>
          ),
          consumerButtons: null
        });
      } else {
        this.setState({
          consumerButtons: (
            <div>
              <p>
                <button className="btn btn-success">
                  <Link to="/new_job" className="hover_link">
                    Post a Job
                  </Link>
                </button>
              </p>
              <p>
                {/* <button onClick={this.toggleProviderStatus}> */}
                <button
                  className="btn btn-success"
                  onClick={this.toggleProviderStatus}
                >
                  Become a Provider
                </button>
              </p>
            </div>
          ),
          providerButtons: null
        });
      }
    } else {
      this.setState({
        userButtons: (
          <div>
            <p>
              <button className="btn btn-success">
                {/* <Link to="/login" className="hover_link"> */}
                <Link to="/login" className="hover_link">
                  Log In
                </Link>
              </button>
            </p>
            <p>
              <button className="btn btn-success">
                <Link to="/signup" className="hover_link">
                  Sign Up
                </Link>
              </button>
            </p>
            <p>
              <button className="btn btn-success">Pricing & Info</button>
            </p>
          </div>
        )
      });
    }
  };

  toggleProviderStatus = () => {
    var providerStatus;

    if (localStorage.getItem("provider_status") === "false") {
      providerStatus = true;
    } else {
      providerStatus = false;
    }
    var userId = localStorage.getItem("user_id");
    var params = { user: { provider: providerStatus } };
    axios
      .patch("http://localhost:3001/users/" + userId, params)
      .then(response => {
        localStorage.setItem("provider_status", response.data.user.provider);
        this.buttons();
      });
  };

  componentDidMount() {
    this.buttons();
  }

  render() {
    return (
      <div>
        <p className="landing-page-header">Welcome to LawnNinja!</p>
        <div className="landing-page-info">
          <p>Lawn mowing made easy.</p>
          <ul>
            <li>1. Post and schedule a lawn mowing job.</li>
            <li>
              2. Receive a notifcation when your job has been claimed by one of
              our trusted LawnNinjas.
            </li>
            <li>3. Meet your LawnNinja.</li>
            <li>
              4. Enjoy the smell of freshly cut grass without actually having to
              mow your lawn.
            </li>
          </ul>
        </div>
        <span className="button-options">
          {this.state.userButtons}
          {this.state.providerButtons}
          {this.state.consumerButtons}
        </span>
        <footer className="clear" />
      </div>
    );
  }
}

export default landingPage;

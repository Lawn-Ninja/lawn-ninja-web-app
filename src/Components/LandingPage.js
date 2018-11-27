import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NewJob from "./NewJob";

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
              <button>
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
                <button>
                  <Link to="/jobs" className="hover_link">
                    Jobs Near Me
                  </Link>
                </button>
              </p>
              <p>
                <button onClick={this.toggleProviderStatus}>
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
                <button>Post a Job</button>
              </p>
              <p>
                <button onClick={this.toggleProviderStatus}>
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
              <button>
                <Link to="/login" className="hover_link">
                  Log In
                </Link>
              </button>
            </p>
            <p>
              <button>
                <Link to="/signup" className="hover_link">
                  Sign Up
                </Link>
              </button>
            </p>
            <p>
              <button>Pricing & Info</button>
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
<<<<<<< HEAD
    var userId = localStorage.getItem('user_id');
    var params = {"user": {"provider": providerStatus}}
    axios.patch('http://localhost:3001/users/' + userId, params).then(response => {
      localStorage.setItem('provider_status', response.data.user.provider);
      this.buttons();
    });
  }
=======
    var userId = localStorage.getItem("user_id");
    var params = { user: { provider: providerStatus } };
    axios
      .patch("http://localhost:3001/users/" + userId, params)
      .then(response => {
        localStorage.setItem("provider_status", response.data.user.provider);
        this.buttons();
      });
  };
>>>>>>> 9ce7b7be9fedcf533c36221be9a26ee5e849ab6b

  componentDidMount() {
    this.buttons();
  }

  render() {
    return (
      <div>
        <NewJob />
        <p className="landing-page-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum
          pellentesque magna, condimentum egestas risus porta vel. Sed a
          accumsan nunc. Maecenas volutpat mattis molestie. Nullam dapibus purus
          vitae condimentum aliquet. Donec arcu quam, blandit vel ligula ut,
          accumsan volutpat ligula. Donec sit amet velit neque. Duis ornare
          magna eget risus consequat tristique. Phasellus et justo sit amet
          risus congue tempus eu eget ante. Nulla facilisi. Cras neque urna,
          tristique congue lacus nec, congue tristique est. Nullam viverra
          lectus non fermentum lacinia. Suspendisse eget ipsum efficitur,
          pretium turpis quis, pharetra libero. Proin condimentum augue diam,
          non imperdiet lorem ultrices eget. Etiam varius cursus odio, eget
          lobortis mi dignissim finibus. Donec ullamcorper tellus et metus
          gravida venenatis.
        </p>
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

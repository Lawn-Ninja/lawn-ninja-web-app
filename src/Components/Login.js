import React, { Component } from "react";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/sessions", {
        email: this.state.email,
        password: this.state.password
      })
      .then(function(response) {
      
        // console.log(response.data);
        localStorage.setItem('id_token', response.data.jwt);
        localStorage.setItem('provider_status', response.data.provider);
        localStorage.setItem('user_id', response.data.user_id);
        var currentToken = localStorage.getItem('id_token');
        var currentProvider = localStorage.getItem('provider_status');
        var currentId = localStorage.getItem('user_id');
        console.log(currentToken);
        console.log(currentProvider);
        console.log(currentId);
        // console.log("this is after the token");
      });
    
    
    const { email, password } = this.state;

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (password === "") {
      this.setState({ errors: { password: "Password is required" } });
      return;
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, password, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={this.onChange}
              error={errors.password}
            />
            <input
              type="submit"
              value="Login"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Login;

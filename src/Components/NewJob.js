import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";

import "../App.css";
import "../Containers/Home.css";
import "./Form.css";

class NewJob extends Component {
  state = {
    requested_time: "",
    errors: {}
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("create new job function");

    console.log(this.state.requested_time);

    const { requested_time } = this.state;

    if (requested_time === "") {
      this.setState({
        errors: { requested_time: "Requested Time is required" }
      });
      return;
    }

    this.setState({
      requested_time: ""
    });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { requested_time, errors } = this.state;
    return (
      <div className="form">
        <div className="form-header">Create New Job</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="RequestedTime"
              name="requested_time"
              type="dateTime"
              placeholder="Enter Requested Time"
              value={requested_time}
              onChange={this.onChange}
              error={errors.requested_time}
            />
            <input type="submit" value="NewJob" className="button" />
          </form>
        </div>
      </div>
    );
  }
}
export default NewJob;

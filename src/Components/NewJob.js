import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TextInputGroup from "./TextInputGroup";
import DateTimePicker from "react-datetime-picker";

import "../App.css";
import "../Containers/Home.css";
import "./Form.css";
import $ from "jquery";

class NewJob extends Component {
  state = {
    requested_time: new Date(),
    errors: {}
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("create new job function");

    console.log(this.state.requested_time);
    const { requested_time } = this.state;

    let token = "Bearer " + localStorage.getItem("id_token");

    $.ajax({
      url: "http://localhost:3001/jobs",
      data: { job: { requested_time: requested_time } },
      type: "POST",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", token);
      },
      context: this,
      success: result => {
        console.log("Job successfully posted!");
        console.log(result);
        this.props.history.replace("/signup");
      }
    });

    if (requested_time === "") {
      this.setState({
        errors: { requested_time: "Requested Time is required" }
      });
      return;
    }

    this.setState({
      requested_time: new Date()
    });
  };

  onChange = requested_time => {
    this.setState({ requested_time });
    console.log(requested_time);
  };

  render() {
    const { requested_time, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <DateTimePicker onChange={this.onChange} value={requested_time} />
          <TextInputGroup
            label="RequestedTime"
            name="requested_time"
            type="datetime"
            placeholder="Date Time"
            value={requested_time}
            onChange={this.onChange}
            error={errors.requested_time}
          />
          <input type="submit" value="New Job" className="button" />
        </form>
      </div>
    );
  }
}
export default withRouter(NewJob);

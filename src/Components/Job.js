import React, { Component } from "react";
import "./MyJobs.css";

class Job extends Component {
  render() {
    const { user_id, requested_time, status } = this.props.job;

    return (
      <div className="my-jobs">
        <h4>User ID: {user_id}</h4>
        <p>Requested Time: {requested_time}</p>
        <p>Status: {status}</p>
      </div>
    );
  }
}

export default Job;

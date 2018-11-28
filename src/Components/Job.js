import React, { Component } from "react";

class Job extends Component {
  render() {
    const { user_id, requested_time, status } = this.props.job;

    return (
      <div>
        <h4>User ID: {user_id}</h4>
        <p>Requested Time: {requested_time}</p>
        <p>Status: {status}</p>
        <p><button>View Job</button></p>
      </div>
    );
  }
}

export default Job;

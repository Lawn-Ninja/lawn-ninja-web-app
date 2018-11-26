import React, { Component } from "react";

class JobDetails extends Component {
  render() {
    const { user_id, requested_time, status, provider_id, start_time, end_time  } = this.props.job;

    return (
      <div>
        <h1>Job Details</h1>
        <h4>User ID: {user_id}</h4>
        <p>Requested Time: {requested_time}</p>
        <p>Status: {status}</p>
        <h1>End of Job Details</h1>
      </div>
    );
  }
}

export default JobDetails;
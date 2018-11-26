import React, { Component } from "react";
import "./JobDetails.css";

class JobDetails extends Component {
  render() {
    const { user_id, requested_time, status, provider_id, start_time, end_time  } = this.props.job;

    return (
      <div>
        <h1 className="clear">Job Details</h1>
        <div className="job-detail-info">
          <h4>User ID: {user_id}</h4>
          <h5>Provider ID: {provider_id}</h5>
          <p>Requested Time: {requested_time}</p>
          <p>Start Time: {start_time}</p>
          <p>End Time: {end_time}</p>
          <p>Status: {status}</p>
        </div>
        <div className="job-detail-buttons">
          <p><button>Cancel Request</button></p>
          <p><button>Claim Job</button></p>
          <p><button>Start Job</button></p>
          <p><button>End Job</button></p>
          <p><button>View Invoice</button></p>
        </div>
        <h1 className="clear">End of Job Details</h1>
      </div>
    );
  }
}

export default JobDetails;
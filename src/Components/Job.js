import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MyJobs.css";
import FriendlyTime from "./FriendlyTime";

class Job extends Component {
  render() {
    const { id, user_id, requested_time, status } = this.props.job;

    return (
      <div>
        <h4>User ID: {user_id}</h4>
        <p>Requested Time: <FriendlyTime time={requested_time} /></p>
        <p>Status: {status}</p>
        <p>
          <button className="btn btn-success">
          <Link to={`/jobs/${id}`} className="hover_link">View Job</Link>
          </button>
        </p>
      </div>
    );
  }
}

export default Job;

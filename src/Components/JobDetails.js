import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./JobDetails.css";
import axios from "axios";
import FriendlyTime from "./FriendlyTime";

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userButtons: null,
      providerInfo: null,
      startInfo: null,
      endInfo: null
    };
  }

  deleteRequest = id => {
    axios
      .delete("http://localhost:3001/jobs/" + this.props.job.id)
      .then(response => {
        // console.log(response.data);
      });
  };

  buttons = id => {
    console.log("in buttons method");
    console.log(this.props.job.consumer_id);
    console.log(localStorage.getItem("user_id"));
    if (this.props.job.consumer_id == localStorage.getItem("user_id")) {
      // this job belongs to the logged in user
      if (this.props.job.status === "posted") {
        this.setState({
          userButtons: (
            <div>
              <p>
                <button className="btn btn-success" onClick={this.deleteRequest.bind(this, id)}>
                  Cancel Request
                </button>
              </p>
            </div>
          )
        });
      } else if (this.props.job.status === "claimed") {
      } else if (this.props.job.status === "started") {
      } else if (this.props.job.status === "completed") {
        this.setState({
          userButtons: (
            <div>
              <p>
                <button className="btn btn-success">View Invoice</button>
              </p>
            </div>
          )
        });
      }
    }
  };

  info = () => {
    if (
      this.props.job.status === "claimed" ||
      this.props.job.status === "started" ||
      this.props.job.status === "completed"
    ) {
      this.setState({
        providerInfo: (
          <div>
            <p>Provider: {this.props.job.provider_name}</p>
          </div>
        )
      });
    }
    if (
      this.props.job.status === "started" ||
      this.props.job.status === "completed"
    ) {
      this.setState({
        startInfo: (
          <div>
            <p>Start Time: <FriendlyTime time={this.props.job.start_time} /></p>
          </div>
        )
      });
    }
    if (this.props.job.status === "completed") {
      this.setState({
        endInfo: (
          <div>
            <p>End Time: <FriendlyTime time={this.props.job.end_time} /></p>
          </div>
        )
      });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.job !== prevProps.job) {
      this.buttons();
      this.info();
    }
  }

  render() {
    const { id, requested_time, status } = this.props.job;

    return (
      <div className="job-detail">
        <div className="job-detail-info">
          <div>
            <p>Requested By: {this.props.job.consumer_name}</p>
          </div>
          <div>
            <p>Requested Time: <FriendlyTime time={requested_time} /></p>
          </div>
          <div>
            <p>Status: {status}</p>
          </div>
          {this.state.providerInfo}
          {this.state.startInfo}
          {this.state.endInfo}
          Job Number: {id}
        </div>
        <div>
          {this.state.userButtons}
          <button className="btn btn-success"><Link to="/my_jobs" className="hover_link">My Jobs</Link></button>
        </div>
      </div>
    );
  }
}

export default withRouter(JobDetails);

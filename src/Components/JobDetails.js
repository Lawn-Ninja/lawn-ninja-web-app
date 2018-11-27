import React, { Component } from "react";
import "./JobDetails.css";
import axios from 'axios';

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerButtons: null,
      consumerButtons: null,
      userButtons: null,
      providerInfo: null,
      startInfo: null,
      endInfo: null
    };
  }

  deleteRequest = () => {
    axios.delete("http://localhost:3001/jobs/" + this.props.job.id).then(response => {
      console.log(response.data);
    }) 
  };

  claimJob = () => {
    var provider_id = localStorage.getItem('user_id');
    var params = {job: {provider_id: provider_id, status: "claimed"}};
    axios.patch("http://localhost:3001/jobs/" + this.props.job.id, params).then(response => {
      console.log(response.data);
    })
    this.buttons();
    this.info();
  };

  startJob = () => {
    var params = {job: {start_time: Date(), status: "started"}};
    axios.patch("http://localhost:3001/jobs/" + this.props.job.id, params).then(response => {
      console.log(response.data);
    })
    this.buttons();
    this.info();
  };

  endJob = () => {
    var params = {job: {end_time: Date(), status: "completed"}};
    axios.patch("http://localhost:3001/jobs/" + this.props.job.id, params).then(response => {
      console.log(response.data);
    })
    this.buttons();
    this.info();
  };

  buttons = () => {
    if (this.props.job.user_id === localStorage.getItem('user_id')) {
      // this job belongs to the logged in user
      if (this.props.job.status === "posted") {
        this.setState({userButtons: (
          <div>
            <p><button onClick={this.deleteRequest}>Cancel Request</button></p>
          </div>
        )});
      } else if (this.props.job.status === "claimed") {
        
      } else if (this.props.job.status === "started") {

      } else if (this.props.job.status === "completed") {
        this.setState({userButtons: (
          <div>
            <p><button>View Invoice</button></p>
          </div>
        )});
      }
    } else {
      if (this.props.job.status === "posted") {
        this.setState({providerButtons: (
          <div>
            <p><button onClick={this.claimJob}>Claim Job</button></p>
          </div>
        )});
      } else if (this.props.job.status === "claimed") {
        this.setState({providerButtons: (
          <div>
            <p><button onClick={this.startJob}>Start Job</button></p>
          </div>
        )});
      } else if (this.props.job.status === "started") {
        this.setState({providerButtons: (
          <div>
            <p><button onClick={this.endJob}>End Job</button></p>
          </div>
        )});
      } else if (this.props.job.status === "completed") {
        this.setState({providerButtons: (
          <div>
            <p><button>View Invoice</button></p>
          </div>
        )});
      }
    }
  };

  info = () => {
    if (this.props.job.status === "claimed" || this.props.job.status === "started" || this.props.job.status === "completed") {
      this.setState({providerInfo: (
        <div>
          <h5>Provider ID: {this.props.job.provider_id}</h5>
        </div>
      )});
    }
    if (this.props.job.status === "started" || this.props.job.status === "completed") {
      this.setState({startInfo: (
        <div>
          <p>Start Time: {this.props.job.start_time}</p>
        </div>
      )});
    }
    if (this.props.job.status === "completed") {
      this.setState({endInfo: (
        <div>
          <p>End Time: {this.props.job.end_time}</p>
        </div>
      )});
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.job !== prevProps.job) {
      this.buttons();
      this.info();
    }
  }

  render() {
    const { id, user_id, requested_time, status } = this.props.job;

    return (
      <div>
        <div className="job-detail-info">
          <h4>ID: {id}</h4>
          <h5>User ID: {user_id}</h5>
          <p>Requested Time: {requested_time}</p>
          <p>Status: {status}</p>
          {this.state.providerInfo}
          {this.state.startInfo}
          {this.state.endInfo}
        </div>
        <div className="job-detail-buttons">
          {this.state.userButtons}
          {this.state.providerButtons}
        </div>
      </div>
    );
  }
}

export default JobDetails;
import React, { Component } from "react";
import "./JobDetails.css";

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

  buttons = () => {
    if (this.props.job.user_id === localStorage.getItem('user_id')) {
      // this job belongs to the logged in user
      if (this.props.job.status === "posted") {
        this.setState({userButtons: (
          <div>
            <p><button>Cancel Request</button></p>
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
            <p><button>Claim Job</button></p>
          </div>
        )});
      } else if (this.props.job.status === "claimed") {
        this.setState({providerButtons: (
          <div>
            <p><button>Start Job</button></p>
          </div>
        )});
      } else if (this.props.job.status === "started") {
        this.setState({providerButtons: (
          <div>
            <p><button>End Job</button></p>
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

  componentDidMount() {
    this.buttons();
    this.info();
  };

  render() {
    const { id, user_id, requested_time, status } = this.props.job;

    return (
      <div>
        <h1 className="clear">Job Details</h1>
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
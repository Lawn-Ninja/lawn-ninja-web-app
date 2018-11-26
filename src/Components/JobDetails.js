import React, { Component } from "react";
import "./JobDetails.css";

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerButtons: null,
      consumerButtons: null,
      userButtons: null
    };
  }

  buttons = () => {
    console.log(localStorage.getItem('user_id'));
    console.log(this.props.job.user_id)
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
  }

  componentDidMount() {
    this.buttons();
  };

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
          {this.state.userButtons}
          {this.state.providerButtons}
        </div>
        <h1 className="clear">End of Job Details</h1>
      </div>
    );
  }
}

export default JobDetails;
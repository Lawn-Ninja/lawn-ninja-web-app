import React, { Component } from "react";
import $ from "jquery";
import JobDetails from "./JobDetails";
<<<<<<< HEAD
import "./JobDetails.css";
=======
>>>>>>> 35a058b2ba9274a4af6550f591e5bd1595192225

class JobDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      job: {},
      id: 3504
    };
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("id_token");
    let requestUrl = "http://localhost:3001/jobs/" + this.state.id;

    $.ajax({
      url: requestUrl,
      type: "GET",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", token);
      },
      context: this,
      success: result => {
        this.setState({
          job: result.job
        });
        console.log("REQUEST COMPLETED");
        console.log(result.job);
      }
    });
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="job-detail-header">
        {console.log("RENDERED")}
        Job Details
        <JobDetails job={this.state.job} />
=======
      <div>
        {console.log("RENDERED")}
        <h1>Job Details</h1>
        <JobDetails key={this.state.job.id} job={this.state.job} />
>>>>>>> 35a058b2ba9274a4af6550f591e5bd1595192225
      </div>
    );
  }
}

export default JobDetailsPage;

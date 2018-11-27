import React, { Component } from "react";
import $ from "jquery";
import JobDetails from "./JobDetails";
import "./JobDetails.css";

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
      <div className="job-detail-header">
        {console.log("RENDERED")}
        Job Details
        <JobDetails job={this.state.job} />
      </div>
    );
  }
}

export default JobDetailsPage;

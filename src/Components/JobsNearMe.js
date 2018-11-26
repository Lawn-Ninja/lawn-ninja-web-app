import React, { Component } from "react";
import JobsList from "./JobsList";
import $ from 'jquery';
import JobDetails from './JobDetails';

class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [{
        user_id: 0,
        requested_time: "now",
        status: "posted",
        provider_id: 0,
        start_time: "then",
        end_time: "later"  }]
    };
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem('id_token');

    $.ajax({
      url: "http://localhost:3001/jobs",
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('Authorization', token)},
      context: this, // Allows us to use this.setState inside success
      success: (result) => {
        this.setState({
          jobs: result.jobs
        });
      }
    })
  }

  render() {
    return (
      <div>
        <JobDetails job={this.state.jobs[0]} />
        {/* <JobsList title={"Jobs Near Me"} jobs={this.state.jobs}/> */}
      </div>
    );
  }
}

export default MyJobs;
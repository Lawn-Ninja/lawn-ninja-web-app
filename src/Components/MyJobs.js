import React, { Component } from "react";
import JobList from "./AllJobs";
// import Job from "./Job";
import $ from 'jquery';

class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedJobs: [],
      scheduledJobs: [],
      startedJobs: [],
      completedJobs: []
    };
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem('id_token');

    $.ajax({
      url: "http://localhost:3001/my_jobs",
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('Authorization', token)},
      context: this, // Allows us to use this.setState inside success
      success: (result) => {
        // console.log(result);
        this.setState({
          requestedJobs: result.jobs.requested_jobs,
          scheduledJobs: result.jobs.scheduled_jobs,
          startedJobs: result.jobs.in_progress_jobs,
          completedJobs: result.jobs.completed_jobs
        });
        // console.log("THIS DOT STATE");
        // console.log(this.state);
      }
    })
  }

  render() {
    return (
      <div>
        <JobList title={"Requested Jobs"} jobs={[this.state.requestedJobs]}/>
        <JobList title={"Scheduled Jobs"} jobs={[this.state.scheduledJobs]}/>
        <JobList title={"Jobs In Progress"} jobs={[this.state.startedJobs]}/>
        <JobList title={"Completed Jobs"} jobs={[this.state.completedJobs]}/>
      </div>
    );
  }
}

export default MyJobs;
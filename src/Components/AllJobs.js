import React, { Component } from "react";
import Job from "./Job";
import $ from 'jquery';
import JobDetails from './JobDetails';

class AllJobs extends Component {
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
        this.setState({jobs: result.jobs});
      }
    })
  }

  render() {
    return (
      <div>
        <JobDetails job={this.state.jobs[0]} />
        {console.log(this.state.jobs)}
        {this.state.jobs.map(job => {
          return (
            <div className="tile" key={job.id}>
              <Job key={job.id} job={job} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllJobs;

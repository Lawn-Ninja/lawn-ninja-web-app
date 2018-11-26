import React, { Component } from "react";
import Job from "./Job";
import $ from 'jquery';

class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
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
        this.setState({jobs: result.jobs});
      }
    })
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        
        {Object.keys(this.state.jobs).map(function (job) {
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

export default MyJobs;

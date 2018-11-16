import React, { Component } from "react";
import axios from "axios";
import Job from "./Job";

class AllJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/jobs")
      .then(response => {
        console.log(response);
        this.setState({ jobs: response.data.jobs });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
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

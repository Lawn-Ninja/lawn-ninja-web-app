import React, { Component } from "react";
import Job from "./Job";

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: props.jobs,
      title: props.title
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {console.log(this.props.jobs)}
        {this.props.jobs[0].map(job => {
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

export default JobsList;

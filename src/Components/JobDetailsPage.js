import React, { Component } from "react";
import JobDetails from './JobDetails';

class JobDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  };

  render() {
    return (
      <div>
        <JobDetails job={{}} />
      </div>
    );
  }
}

export default JobDetailsPage;
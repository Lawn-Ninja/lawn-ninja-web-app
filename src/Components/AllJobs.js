import React, {Component} from 'react'
import axios from 'axios'

class AllJobs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/jobs').then(response => {console.log(response)
      this.setState({jobs: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.jobs.map((job) => {
          return(
            <div className="tile" key={job.id}>
              <h4>{job.status}</h4>
              <h4>{job.requested_time}</h4>
            </div>
          )
        })}
      </div>
    );
  }
}

export default AllJobs

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Logout extends Component {
  state = {
    submitted: false
  }

  postLogoutHandler = () => {
    axios.delete("http://localhost:3001/logout")
      .then(response =>  {
      console.log(response);
      this.props.history.replace('/login');
      console.log("in logout request");
      localStorage.setItem('id_token', response.data.jwt);
      var currentToken = localStorage.getItem('id_token');
      console.log("current token");
      console.log(currentToken);
      });
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/login" />;
    }
    return (
      <div className="card mb-3">
        <div className="card-header">Logout</div>
        <div className="card-body">
            <p>Are you sure you want to log out?</p>
            <input
              type="submit"
              value="Logout"
              className="btn btn-light btn-block"
              onClick={this.postLogoutHandler}
            />
        </div>
      </div>
    );
  }
}

export default Logout;
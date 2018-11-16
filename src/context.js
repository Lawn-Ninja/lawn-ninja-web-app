import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
    axios.post(
      'http://localhost:3001/users', {
        user:
        {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          address: '',
          city: '',
          state: '',
          zip_code: '',
          phone_number: ''
        }
      }
    )
    return (
      ...state,
      users: [action.payload, ...state.users]
    );
  }
};

export class Provider extends Component {
  state = {
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
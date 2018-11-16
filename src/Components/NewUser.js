import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "./TextInputGroup";

class NewUser extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
    errors: {}
  };

  onSubmit = (dispatch, event) => {
    event.preventDefault();

    const {
      id,
      name,
      email,
      address,
      city,
      state,
      zip_code,
      phone_number,
      password,
      password_confirmation
    } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (address === "") {
      this.setState({ errors: { address: "Address is required" } });
      return;
    }

    if (city === "") {
      this.setState({ errors: { city: "City is required" } });
      return;
    }

    if (state === "") {
      this.setState({ errors: { state: "State is required" } });
      return;
    }

    if (zip_code === "") {
      this.setState({ errors: { zip_code: "Zip Code is required" } });
      return;
    }

    if (phone_number === "") {
      this.setState({ errors: { phone_number: "Phone Number is required" } });
      return;
    }

    const newUser = {
      id,
      name,
      email,
      address,
      city,
      state,
      zip_code,
      phone_number,
      password,
      password_confirmation
    };

    dispatch({ type: "CREATE_USER", payload: newUser });

    this.setState({
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      phone_number: "",
      password: "",
      password_confirmation: ""
    });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const {
      name,
      email,
      address,
      city,
      state,
      zip_code,
      phone_number,
      password,
      password_confirmation,
      errors
    } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Create User</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Address"
                    name="address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={this.onChange}
                    error={errors.address}
                  />
                  <TextInputGroup
                    label="City"
                    name="city"
                    placeholder="Enter City"
                    value={city}
                    onChange={this.onChange}
                    error={errors.city}
                  />
                  <TextInputGroup
                    label="State"
                    name="state"
                    placeholder="Enter State"
                    value={state}
                    onChange={this.onChange}
                    error={errors.state}
                  />
                  <TextInputGroup
                    label="ZipCode"
                    name="zip_code"
                    placeholder="Enter Zip Code"
                    value={zip_code}
                    onChange={this.onChange}
                    error={errors.zip_code}
                  />
                  <TextInputGroup
                    label="PhoneNumber"
                    name="phone_number"
                    placeholder="Enter Phone Number"
                    value={phone_number}
                    onChange={this.onChange}
                    error={errors.phone_number}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextInputGroup
                    label="PasswordConfirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm Password"
                    value={password_confirmation}
                    onChange={this.onChange}
                    error={errors.password_confirmation}
                  />
                  <input
                    type="submit"
                    value="Create User"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }

  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Name:
  //         <input
  //           type="text"
  //           value={this.state.value}
  //           onChange={this.handleChange}
  //         />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
  // }
}

export default NewUser;

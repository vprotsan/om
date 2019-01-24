import React, { Component } from 'react';
import styled from 'styled-components';


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone or email',
      email: 'Email',
      dob: 'Date of Birth',
      businessName: 'Business name',
      password: 'Password'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('You have been registered: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name
          <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange} />
        </label>

        <label>
          Last name
          <input
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInputChange} />
        </label>

        <label>
          Phone or Email
          <input
                name="phone"
                type="number"
                value={this.state.phone}
                onChange={this.handleInputChange} />
        </label>

        <label>
          Email address
          <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange} />
        </label>

        <label>
          Date of Birth
          <input
                name="dob"
                type="date"
                value={this.state.dob}
                onChange={this.handleInputChange} />
        </label>

        <label>
          Business Name
          <input
                name="businessName"
                type="text"
                value={this.state.businessName}
                onChange={this.handleInputChange} />
        </label>

        <label>
          Password
          <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default RegisterForm;

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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default RegisterForm;

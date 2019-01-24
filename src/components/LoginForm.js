import React, { Component } from 'react';
import styled from 'styled-components';

class LoginForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loginValue: 'Email or Phone',
        passwordValue: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
    alert('Logged in: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email or Phone
          <input
              type="text"
              name="loginValue"
              value={this.state.loginValue}
              onChange={this.handleInputChange} />
        </label>
        <label>
          Password
          <input
              type="password"
              name="passwordValue"
              value={this.state.passwordValue}
              onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;

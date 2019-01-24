import React, { Component } from 'react';
import styled from 'styled-components';

class LoginForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loginValue: 'Email or Phone',
        passwordValue: ''
      };
      this.handleLoginChange = this.handleLoginChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoginChange(event) {
    this.setState({loginValue: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({passwordValue: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email or Phone
          <input type="text" value={this.state.loginValue} onChange={this.handleLoginChange} />
        </label>
        <label>
          Password
          <input type="password" value={this.state.passwordValue} onChange={this.handlePasswordChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }


}

export default LoginForm;

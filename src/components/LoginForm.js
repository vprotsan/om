import React, { Component } from 'react';
import styled from 'styled-components';

const LoginForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <label>
          Email or Phone
          <input
              type="text"
              name="loginValue"
              value={props.loginValue}
              onChange={props.handleInputChange} />
        </label>
        <label>
          Password
          <input
              type="password"
              name="passwordValue"
              value={props.passwordValue}
              onChange={props.handleInputChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
    );  
}

export default LoginForm;

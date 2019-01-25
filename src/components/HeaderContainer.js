import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoggedIn from './LoggedIn';

const HeaderContainer = (porps) => {
  render(){
    return(
      <div>
        {props.isLoggedIn ?
          <LoggedIn/> :
          <LoginForm handleSubmit = {props.handleSubmit}
                    handleInputChange = {props.handleInputChange} />}
      </div>
    )
  }
}

export default HeaderContainer;

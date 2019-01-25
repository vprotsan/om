import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Redirect } from 'react-router-dom';

const LoggedIn = (props) => {

    return (
      <div class="user">
        <NavLink to={`/account`}>My Account</NavLink>
      </div>
    );
}

export default LoggedIn;

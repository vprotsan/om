import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';

import styled from 'styled-components';
import MainContainer from './MainContainer';
import Account from './Account';

const MainWrapper = (props) => (
  <div class="main-content-wrapper">
    <Switch>
        <Route exact path="/" component={ MainContainer }/>
        {props.isLoggedIn ?
          <Route path="/account" component={Account}/> :
          ""
        }
    </Switch>
  </div>
);

export default MainWrapper;

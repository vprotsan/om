import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';

import styled from 'styled-components';
import MainContainer from './MainContainer';
import Account from './Account';

const MainWrapper = (props) => (
  <div class="main-content-wrapper">
    <Switch>
        <Route exact path="/" component={ MainContainer }/>
        <Route path="/account" component={Account}/>
        {/* <Route path="/about" render={() => <About title="About"/>}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route path="/teachers/:topic/:name" component={Featured}/>
        <Route path="/courses" component={Courses}/>
        <Route component={NotFound}/> */}
    </Switch>
  </div>
);

export default MainWrapper;

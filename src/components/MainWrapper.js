import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from './MainContainer';
import Account from './Account';

const MainWrapper = (props) => (
  <div className="main-content-wrapper">
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

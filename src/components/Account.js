import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import AccountContainer from './myaccount/AccountContainer';


const Account = ({match}) => (

  <div className="container-my-account">
    <div className="my-account-header group">
      <h2>My Account</h2>
      <ul className="account-nav">
        <li><NavLink to={`${match.url}/account`}>Account</NavLink></li>
        <li><NavLink to={`${match.url}/data`}>Data</NavLink></li>
        <li><NavLink to={`${match.url}/notifications`}>Notifications</NavLink></li>
      </ul>
    </div>

    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/account`}/>}/>
    <Route exact path={`${match.path}/account`} render={ () => <AccountContainer />}/>
    <Route exact path={`${match.path}/data`} render={ () => <AccountContainer />}/>
    <Route exact path={`${match.path}/notifications`} render={ () => <AccountContainer />}/>
  </div>
);

export default Account;

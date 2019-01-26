import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Data from './myaccount/data.js';
import LoginSecurity from './myaccount/loginSecurity.js';
import Notifications from './myaccount/notifications.js';


const Account = ({match}) => (

  <div className="container-my-account">
      <div className="my-account-header group">
          <h2>My Account</h2>
          <ul className="account-nav">
            <li><NavLink to={`${match.url}/security`}>Security</NavLink></li>
            <li><NavLink to={`${match.url}/data`}>Data</NavLink></li>
            <li><NavLink to={`${match.url}/notifications`}>Notifications</NavLink></li>
          </ul>
      </div>

      <Route exact path={`${match.path}/security`} render={ () => <LoginSecurity />}/>
      <Route exact path={`${match.path}/data`} render={ () => <Data />}/>
      <Route exact path={`${match.path}/notifications`} render={ () => <Notifications />}/>
  </div>
);

export default Account;

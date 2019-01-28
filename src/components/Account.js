import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Data from './myaccount/data.js';
import LoginSecurity from './myaccount/loginSecurity.js';
import Notifications from './myaccount/notifications.js';

import styled from 'styled-components';

const MyAccContStyles = styled.div`

  .containerMyAccount {
    width: 80%;
    margin: 2em auto;
    box-shadow: 1px 1px 25px #e2e2e2;
    border-radius: 20px;
    padding: 1em;
    min-height: 500px;
  }

  .account-nav {
    display: flex;
    padding: 1em;
  }

  .account-nav a {
    margin: 0 2em;
  }

`;


const Account = ({match}) => (
  <MyAccContStyles>
      <div className="containerMyAccount">
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
  </MyAccContStyles>
);

export default Account;

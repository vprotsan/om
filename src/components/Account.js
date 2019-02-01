import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, NavItem } from 'reactstrap';

import Data from './myaccount/data.js';
import LoginSecurity from './myaccount/loginSecurity.js';
import Notifications from './myaccount/notifications.js';


const MyAccContStyles = styled.div`

  .containerMyAccount {
    width: 80%;
    margin: 2em auto;
    box-shadow: 1px 1px 25px #e2e2e2;
    border-radius: 20px;
    padding: 1em;
    min-height: 500px;
  }

  .nav-item {
    padding: 1em 1.5em;
    margin: 0.5em;
  }

  .table tr td{
    padding: 2em 1em;
  }

  .nav-item a {
    font-size: 1.2em;
    color: #023367;
  }

`;

const Account = ({match}) => (
          <MyAccContStyles className="containerMyAccount">
              <div className="my-account-header group">
                    <Nav tabs>
                        <NavItem>
                            <NavLink to={`${match.url}/security`} active>Security</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to={`${match.url}/data`}>Data</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to={`${match.url}/notifications`}>Notifications</NavLink>
                        </NavItem>
                    </Nav>
              </div>

              <Route exact path={`${match.path}/security`} render={ () => <LoginSecurity />}/>
              <Route exact path={`${match.path}/data`} render={ () => <Data />}/>
              <Route exact path={`${match.path}/notifications`} render={ () => <Notifications />}/>
          </MyAccContStyles>
)

export default Account;

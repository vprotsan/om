import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/index.css';

const LoggedIn = (props) => {

    return (
      <div className="user loggedin">
        <NavLink to={`/account`}>My Account</NavLink>
      </div>
    );
}

export default LoggedIn;

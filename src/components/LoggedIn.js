import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedIn = (props) => {

    return (
      <div className="user">
        <NavLink to={`/account`}>My Account</NavLink>
      </div>
    );
}

export default LoggedIn;

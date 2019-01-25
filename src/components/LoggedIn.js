import React, { Component } from 'react';
import styled from 'styled-components';

const LoggedIn = (props) => {

    return (
      <div class="user">
        <p>{props.name}</p>
      </div>
    );
}

export default LoginForm;

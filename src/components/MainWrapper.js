import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import styled from 'styled-components';
import RegisterForm from './RegisterForm';

const MainWrapper = (props) => (
  <div class="main-content-wrapper">

    <RegisterForm/>
  </div>
);

export default MainWrapper;

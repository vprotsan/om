import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, NavItem, Button } from 'reactstrap';

import PostAJobModal from "../jobForm/jobModal"


const DashStyles = styled.div`

`;

const Dashboard = (props) => (
          <DashStyles className="containerDash">
                    <NavLink to={`/post-a-job`} className="blue btn">Post a Job</NavLink>
          </DashStyles>
)

export default Dashboard;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
// import './css/index.css';

const LoggedInStyles = styled.div`
    a {
        color: rgba(255,255,255, 0.7);
        float: right;
    }

    a:hover {
        color: rgba(255,255,255, 1);
    }

`

const LoggedIn = (props) => {

    return (
      <LoggedInStyles className="user loggedin">
        <NavLink to={`/account`}>My Account</NavLink>
        {/* <NavLink to={`/#post-a-job`}>Post a job</NavLink> */}
        {/* <Button onClick={props.onClick}>{props.buttonLabel}</Button> */}
        {/* <PostAJobModal toggle = {this.toggle}/> */}
      </LoggedInStyles>
    );
}

export default LoggedIn;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, NavItem, Modal, ModalHeader, ModalBody, ModalFooter , CustomInput, Col, Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import styled from 'styled-components';
// import './css/index.css';

const LoggedInStyles = styled.div`
    ${'' /* a {
        color: rgba(255,255,255, 0.7);
        float: right;
    }

    a:hover {
        color: rgba(255,255,255, 1);
    } */}

`

class LoggedIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    render(){
        return (
      <LoggedInStyles className="user loggedin">
        {/* <NavLink to={`/account`}>My Account</NavLink> */}
        {/* <NavLink to={`/#post-a-job`}>Post a job</NavLink> */}
        {/* <Button onClick={props.onClick}>{props.buttonLabel}</Button> */}
        {/* <PostAJobModal toggle = {this.toggle}/> */}
        <Nav tabs>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              My Account
            </DropdownToggle>
            <DropdownMenu>
                <Nav className="flex-column">
                    <NavItem>
                        <NavLink to={`/account`}>Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/settings`}>Settings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/logout`}>Sign out</NavLink>
                    </NavItem>
                </Nav>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </LoggedInStyles>
    );
    }
}

export default LoggedIn;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav,Dropdown, DropdownToggle, DropdownMenu, NavItem } from 'reactstrap';
import styled from 'styled-components';
// import './css/index.css';

const LoggedInStyles = styled.div`
    .loggedin {
        border-bottom: none;
        justify-content: flex-end;
    }

    .loggedin .nav-link {
        color:rgba(255,255,255, 0.7);
    }

    .loggedin .nav-link:hover {
        color:rgba(255,255,255, 1);
        border-radius: 25px;
    }

    .loggedin .dropdown.nav-item {
        border: 1px solid rgba(255,255,255, 0.7);
        border-radius: 25px;
    }

    .loggedin .nav-tabs .nav-item.show .nav-link {
        border-radius: 25px;
    }

    .accDrop .nav-item {
        margin: 0.8em 0.2em 0.8em 0.8em;
        color: #4064a8;
    }
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
      <LoggedInStyles className="user">
        <Nav tabs className="loggedin">
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              My Account
            </DropdownToggle>
            <DropdownMenu className="accDrop">
                <Nav className="flex-column">
                    <NavItem>
                        <NavLink to={`/dashboard`}>Dashboard</NavLink>
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

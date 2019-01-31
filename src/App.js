import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import HeaderContainer from './components/HeaderContainer';
import MainWrapper from './components/MainWrapper';
import PostAJobModal from './components/jobForm/jobModal'
import PropTypes from 'prop-types';

import './css/reset.css';
import './css/global.css';

const AppStyles = styled.div`

  .form-control, .btn {
    border-radius: 20px;
    border: 1px solid #58595b;
  }

   .btn-secondary {
     background: #4064a8;
     color: #ffffff;
   }

  textarea {
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    margin: 1em 0;
  }

  position: relative;

  .main-container-wrapper div:nth-child(3) button {
    position: absolute;
    top: 29px;
    right: 41px;
  }


`;


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isLogged: false,
        modal: false,
        buttonLabel: 'Post a Job'

      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Logged in: ' + this.state.value);
    event.preventDefault();
  }

  render(){

    return(
      <BrowserRouter>
          <AppStyles>
                <div className="main-container-wrapper">
                      <HeaderContainer  handleSubmit = {this.handleSubmit}
                                        handleInputChange = {this.handleInputChange}
                                        isLoggedIn = {this.state.isLogged}
                                        buttonLabel = {this.state.buttonLabel}
                                        onClick = {this.toggle}

                      />
                      <MainWrapper isLoggedIn = {this.state.isLogged}/>
                      <PostAJobModal toggle = {this.toggle}/>
                </div>
          </AppStyles>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
      handleSubmit: PropTypes.func,
      handleInputChange: PropTypes.func,
      isLoggedIn: PropTypes.bool
}

export default App;

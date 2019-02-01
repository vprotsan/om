import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import HeaderContainer from './components/HeaderContainer';
import MainWrapper from './components/MainWrapper';
import PostAJobModal from './components/jobForm/jobModal'
import PropTypes from 'prop-types';

import './css/reset.css';
// import './css/global.css';

const AppStyles = styled.div`

  body {
    background: #f8f9fe;
    font-size: 16px;
    font-family: sans-serif;
    line-height: 1.2;
    color:#212428;
  }

  .form-control,
  .custom-select {
    border-radius: 20px;
    border: 1px solid #bfbfbf;
  }

  .header-wrapper {
    padding: 2em;
    background: #4064a8;
  }

  .main-content-wrapper {
    padding: 3em 2% 5em;;
  }

  .btn.btn-secondary {
    border: 1px solid #ffffff;
  }

  .btn.blue {
    font-size: 1.01em;
    padding: 0.8em 1.2em;
    margin-left: auto;
    border-radius: 30px;
  }

  .btn.blue:hover {
      color: #fff;
      background-color: #2a5194;
      border-color: #2a5194;
  }

  .btn-secondary {
    background: #4064a8;
    color: #ffffff;
  }
`;


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isLogged: false,
        // modal: false,
        buttonLabel: 'Post a Job'

      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.toggle = this.toggle.bind(this);
  }

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

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
                      {/* <PostAJobModal toggle = {this.toggle}/> */}
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

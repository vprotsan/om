import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components'
import HeaderContainer from './components/HeaderContainer';
import MainWrapper from './components/MainWrapper';

const styledVal = styled.p`

`

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isLogged: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
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
          <div className="main-container">
            <HeaderContainer  handleSubmit = {this.handleSubmit}
                              handleInputChange = {this.handleInputChange}
                              isLoggedIn = {this.state.isLogged}

            />
            <MainWrapper isLoggedIn = {this.state.isLogged}/>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;

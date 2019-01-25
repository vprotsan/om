import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderContainer from './components/Header';
import MainWrapper from './components/MainWrapper';
import Home from './components/Header';

const styledVal = styled.p`

`

class App extends Component(){

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
        <div className="main-container">
          <HeaderContainer  handleSubmit = {this.handleSubmit}
                            handleInputChange = {this.handleInputChange}
                            isLoggedIn = {this.state.isLogged}

          />
          <MainWrapper isLoggedIn = {this.state.isLogged}/>
        </div>
    )
  }
}

export default App;

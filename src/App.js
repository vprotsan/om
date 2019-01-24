import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './components/Header';
import MainWrapper from './components/MainWrapper';

const styledVal = styled.p`

`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainWrapper/>
      </div>
    );
  }
}

export default App;

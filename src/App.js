import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './components/Header';

const styledVal = styled.p`

`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import MainContainer from './MainContainer';
import JobFormWrapper from './jobForm/jobFormWrapper';
import Account from './Account';

const MainWrapperStyles = styled.div`



`;

const MainWrapper = (props) => (
  <MainWrapperStyles className="main-content-wrapper">
      <Container>
              <Switch>
                  <Route exact path="/" component={ MainContainer }/>
                  {/* for demontration */}
                  <Route exact path="/post-a-job" component={ JobFormWrapper }/>
                  {/* END for demontration */}
                  {props.isLoggedIn ?
                    <Route path="/account" component={Account}/> :
                    ""
                  }
              </Switch>
     </Container>
   </MainWrapperStyles>
);

Container.propTypes = {
  fluid:  PropTypes.bool
}

export default MainWrapper;

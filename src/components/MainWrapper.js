import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainContainer from './MainContainer';
import JobFormPage from './jobForm/jobFormPage';
import Dashboard from './myaccount/dashboard';
import Account from './Account';

const MainWrapperStyles = styled.div`
`;

const MainWrapper = (props) => (
  <MainWrapperStyles className="main-content-wrapper">
      <Container fluid={true}>
              <Switch>
                  <Route exact path="/" component={ MainContainer }/>
                  <Route exact path="/dashboard" component={ Dashboard }/>
                  <Route exact path="/post-a-job" component={ JobFormPage }/>
                  {props.isLoggedIn ?
                    <Route path="/settings" component={Account}/> :
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

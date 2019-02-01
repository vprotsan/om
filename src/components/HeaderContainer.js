import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col, NavLink } from 'reactstrap';

import LoginForm from './login/LoginForm';
import LoggedIn from './login/LoggedIn';

const HeaderContainer = (props) => {

    return(
     <div className="header-wrapper">
         <Container fluid={true}>
             <Row>
              <Col xs="6" sm="6">
                  <NavLink href={`/`} active>Gignav</NavLink>
              </Col>
              <Col xs="6" sm="6">
                  {props.isLoggedIn ?
                       <LoggedIn buttonLabel = {props.buttonLabel}
                                 onClick = {props.onClick}/> :
                       <LoginForm handleSubmit = {props.handleSubmit}
                                  handleInputChange = {props.handleInputChange} />
                   }
              </Col>
            </Row>
         </Container>
     </div>
    )

}

Container.propTypes = {
  fluid:  PropTypes.bool
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  form: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: PropTypes.array,
}

export default HeaderContainer;

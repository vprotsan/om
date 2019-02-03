import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, NavLink } from 'reactstrap';
import styled from 'styled-components';

import LoginForm from './login/LoginForm';
import LoggedIn from './login/LoggedIn';
import logoPng from '../images/logo302.png'; // with import

const LogoStyles = styled.div`
    .logo {
      max-width: 120px;
    }
`;

const HeaderWrapperStyles = styled.div`
    .container-fluid {
      padding-left: 0;
    }
`;

const HeaderContainer = (props) => {

    return(
     <div className="header-wrapper">
         <Container fluid={true}>
             <Row>
              <Col xs="6" sm="6">
                  <NavLink href={`/`}><LogoStyles><img className="logo" alt="Gignav logo" src={logoPng} /></LogoStyles></NavLink>
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

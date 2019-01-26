import React from 'react';
import styled from 'styled-components';
import LoginForm from './login/LoginForm';
import LoggedIn from './login/LoggedIn';
import PropTypes from 'prop-types';

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    background: #4064a8;
    padding: 2em;
    width: 100%;
`;


const HeaderContainer = (props) => {

    return(
     <HeaderStyled>
            {props.isLoggedIn ?
              <LoggedIn/> :
              <LoginForm handleSubmit = {props.handleSubmit}
                         handleInputChange = {props.handleInputChange} />
            }
     </HeaderStyled>
    )

}

HeaderContainer.propTypes = {
      handleSubmit: PropTypes.func.isRequired,
      handleInputChange: PropTypes.func.isRequired
}

export default HeaderContainer;

import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoggedIn from './LoggedIn';
import PropTypes from 'prop-types';

const HeaderStyled = styled.div`
    background: #4064a8;
    padding: 2em;
`;


const HeaderContainer = (props) => {

    return(
     <HeaderStyled>
          <div>
            {props.isLoggedIn ?
              <LoggedIn/> :
              <LoginForm handleSubmit = {props.handleSubmit}
                         handleInputChange = {props.handleInputChange} />
            }
          </div>
     </HeaderStyled>
    )

}

HeaderContainer.propTypes = {
      handleSubmit: PropTypes.func.isRequired,
      handleInputChange: PropTypes.func.isRequired
}

export default HeaderContainer;

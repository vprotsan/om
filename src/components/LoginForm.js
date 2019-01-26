import React from 'react';

const LoginForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <label>
          Email or Phone
          <input
              type="text"
              name="loginValue"
              value={props.loginValue}
              onChange={props.handleInputChange}
              className="input" />
        </label>
        <label>
          Password
          <input
              type="password"
              name="passwordValue"
              value={props.passwordValue}
              onChange={props.handleInputChange}
              className="input"/>
        </label>
        <input type="submit" value="Login" className="input btn"/>
      </form>
    );
}

export default LoginForm;

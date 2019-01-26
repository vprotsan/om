import React from 'react';
import './css/index.css';

const LoginForm = (props) => {

    return (
      <div className="user login">
        <form onSubmit={props.handleSubmit}>
          <label>
            Email or Phone</label>
            <input
                placeholder="Email or Phone"
                type="text"
                name="loginValue"
                value={props.loginValue}
                onChange={props.handleInputChange}
                className="input" />

          <label>
            Password</label>
            <input
                placeholder="password"
                type="password"
                name="passwordValue"
                value={props.passwordValue}
                onChange={props.handleInputChange}
                className="input"/>

          <input type="submit" value="Login" className="input btn white"/>
        </form>
    </div>
    );
}

export default LoginForm;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
// import './css/index.css';

const LoginForm = (props) => {

    return (
        // <Form onSubmit={props.handleSubmit}>
        //     <Container>
        //         <Row>
        //             <Col xs="12" sm="6">
        //                 <FormGroup>
        //                       <Input
        //                           type="text"
        //                           name="loginValue"
        //                           value={props.loginValue}
        //                           onChange={props.handleInputChange}
        //                           id="exampleEmail"
        //                           placeholder="Email or Phone" />
        //                 </FormGroup>
        //             </Col>
        //             <Col xs="12" sm="6">
        //                 <FormGroup>
        //                         <Input type="password"
        //                                name="passwordValue"
        //                                id="examplePassword"
        //                                placeholder="password"
        //                                value={props.passwordValue}
        //                                onChange={props.handleInputChange} />
        //                 </FormGroup>
        //             </Col>
        //             <Col xs="12" sm="2">
        //                  <Button type="submit" value="Login">Submit</Button>
        //             </Col>
        //         </Row>
        //     </Container>
        // </Form>

        <Form inline onSubmit={props.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail" hidden>Email</Label>
              <Input
                    type="text"
                    name="loginValue"
                    value={props.loginValue}
                    onChange={props.handleInputChange}
                    id="exampleEmail"
                    placeholder="Email or Phone" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="password" hidden>Password</Label>
              <Input
                    type="password"
                    name="passwordValue"
                    id="examplePassword"
                    placeholder="password"
                    value={props.passwordValue}
                    onChange={props.handleInputChange}/>
            </FormGroup>
            {' '}
            <Button type="submit" value="Login">Login</Button>
        </Form>

    //   <div className="user login">
    //     <form onSubmit={props.handleSubmit}>
    //       <label>
    //         Email or Phone</label>
    //         <input
    //             placeholder="Email or Phone"
    //             type="text"
    //             name="loginValue"
    //             value={props.loginValue}
    //             onChange={props.handleInputChange}
    //             className="input" />
    //
    //       <label>
    //         Password</label>
    //         <input
    //             placeholder="password"
    //             type="password"
    //             name="passwordValue"
    //             value={props.passwordValue}
    //             onChange={props.handleInputChange}
    //             className="input"/>
    //
    //       <input type="submit" value="Login" className="input btn white"/>
    //     </form>
    // </div>
    );
}

Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  // state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

Form.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

FormGroup.propTypes = {
  children: PropTypes.node,
  // Applied the row class when true, does nothing when false
  row: PropTypes.bool,
  // Applied the form-check class when true, form-group when false
  check: PropTypes.bool,
  inline: PropTypes.bool,
  // Applied the disabled class when the check and disabled props are true, does nothing when false
  disabled: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.string, // default: 'div'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

FormText.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'small'
  color: PropTypes.string, // default: 'muted'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

export default LoginForm;

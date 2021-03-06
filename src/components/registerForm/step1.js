import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Datepicker } from 'reactstrap';
import FormErrors from './ErrorsForm.js';
import styled from 'styled-components';

import './css/index.css';

const Step1Styles = styled.div`
    #dob[type="date"]:before {
      content: attr(placeholder) !important;
      color: #aaa;
      margin-right: 0.5em;
    }
    #dob[type="date"]:focus:before,
    #dob[type="date"]:valid:before {
      content: "";
    }
`;

class Step1 extends Component {

  onFocus(e){
      e.currentTarget.type = "date";
  }

  onBlur(e){
      e.currentTarget.type = "text";
      e.currentTarget.placeholder = "Enter a Date";
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      emailAddress: '',
      dob: '',
      businessName: '',
      password: '',
      formErrors: {emailAddress: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
    this.onChange = this.onChange.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  onChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      }, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch(fieldName) {
        case 'emailAddress':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }

      this.setState({
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      }, this.validateForm);
  }

  validateForm() {
      this.setState({
        formValid: this.state.emailValid && this.state.passwordValid
      });
  }

  render() {
    return (
      <div>
          <h3>New to Gignav? Register!</h3>
          <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
          </div>
          <Form onSubmit={this.props.handleSubmit}>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="firstName" hidden>First name</Label>
                        <Input type="text"
                               name="firstName"
                               id="firstName"
                               placeholder="First name"
                               value={this.state.firstName}
                               onChange={this.onChange}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="Last name" hidden>Last name</Label>
                        <Input type="text"
                               name="lastName"
                               id="lastName"
                               placeholder="Last name"
                               value={this.state.lastName}
                               onChange={this.onChange}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="phone" hidden>Phone</Label>
                        <Input type="text"
                               name="phone"
                               id="phone"
                               placeholder="Phone"
                               value={this.state.phone}
                               onChange={this.onChange} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="emailAddress" hidden>Email address</Label>
                        <Input type="email"
                               name="emailAddress"
                               id="emailAddress"
                               placeholder="Email address"
                               value={this.state.emailAddress}
                               onChange={this.onChange} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="dob" hidden>Date of Birth</Label>
                          <Input type="text"
                                 name="dob"
                                 id="dob"
                                 placeholder="Date of Birth"
                                 value={this.state.dob}
                                 onChange={this.onChange}
                                 onFocus={this.onFocus}
                                 onBlur={this.onBlur} />
                        </FormGroup>
                      </Col>
                  </Row>
                  <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="businessName" hidden>Business name</Label>
                          <Input type="text"
                                 name="businessName"
                                 id="businessName"
                                 placeholder="Business name"
                                 value={this.state.businessName}
                                 onChange={this.onChange} />
                        </FormGroup>
                      </Col>
                  </Row>
                  <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="password" hidden>Password</Label>
                          <Input type="password"
                                 name="password"
                                 id="password"
                                 placeholder="Password"
                                 value={this.state.password}
                                 onChange={this.onChange} />
                        </FormGroup>
                      </Col>
                  </Row>
                  <p className="smallPrint">By proceeding beyond this page, I agree to terms and conditions.</p>
                  <Button className="blue" >Register</Button>
          </Form>
      </div>
    );
  }
}

export default Step1;

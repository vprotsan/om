import React, { Component } from 'react';
import FormErrors from './ErrorsForm.js';
import './css/index.css';



class Step1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      dob: '',
      businessName: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
    this.onChange = this.onChange.bind(this);
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
      case 'email':
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
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }


  render() {
    return (
      <div>
          <h3>New to Gignav? Register!</h3>
          <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
          </div>
          <form onSubmit={this.props.handleSubmit}>

            <div className="row">
               <div className="left">
                   <label>First name</label>
                     <input
                           placeholder="First name"
                           name="firstName"
                           type="text"
                           value={this.state.firstName}
                           onChange={this.onChange}
                           className="input"/>

               </div>
               <div className="right">
                   <label>Last name</label>
                     <input
                           placeholder="Last name"
                           name="lastName"
                           type="text"
                           value={this.state.lastName}
                           onChange={this.onChange}
                           className="input"/>
               </div>
            </div>

            <div className="row">
                <div className="left">
                        <label>Phone or Email</label>
                        <input
                              placeholder="Phone or Email"
                              name="phone"
                              type="number"
                              value={this.state.phone}
                              onChange={this.onChange}
                              className="input"/>
                </div>
                <div className="right">
                      <label>Email address</label>
                      <input
                            placeholder="Email address"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            className="input"/>
                  </div>
            </div>

            <div className="column">
              <div className="left">
                 <label>Date of Birth</label>
                  <input
                        placeholder="Date of Birth"
                        name="dob"
                        type="date"
                        value={this.state.dob}
                        onChange={this.onChange}
                        className="input" />
            </div>
            <div className="left">
                <label>Business Name</label>
                <input
                      placeholder="Business Name"
                      name="businessName"
                      type="text"
                      value={this.state.businessName}
                      onChange={this.onChange}
                      className="input" />
            </div>
            <div className="left">
               <label>Password</label>
                <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      className="input"/>
            </div>
            </div>
            <p className="smallPrint">By proceeding beyond this page, I agree to terms and conditions.</p>
            <div className="row last">
              <div className="right">
                <input disabled={!this.state.formValid}
                       type="submit"
                       value="Register"
                       className="input btn blue"/>
              </div>
            </div>
          </form>
      </div>
    );
  }
}

export default Step1;

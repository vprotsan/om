import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
// import FormErrors from './ErrorsForm.js';
// import './css/index.css';

const Label = styled.label`
  ${'' /* background: red; */}
  display: block;
  ${'' /* padding: 1rem; */}
`;

const Input = styled.input`
  &:checked + ${Label} {

  }
`;

const states = [
  { value: 'MA', label: 'MA' },
  { value: 'FL', label: 'FL' },
  { value: 'NY', label: 'NY' }
];

class jobForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobProject: '',
      jobTitle: '',
      city: '',
      nameAndContact: '',
      projectDefCheck: '',
      phone:'',
      email: '',
      address: '',
      zip: '',

      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
    this.onChange = this.onChange.bind(this);
  }

  toggleCheck() {
    this.setState({projectDefCheck: !this.state.isChecked});
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
      <div className="jobForm">
          <div className="close btn">X</div>
          <h3>Publish a job</h3>
          {/* <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
          </div> */}
          <form onSubmit={this.props.handleSubmit}>

             <div className="row">
                    <div className="left">
                          <label>Job / Project:</label>
                    </div>

                     <div className="right">
                           <input
                                 placeholder="Support Customer Fleet"
                                 name="jobProject"
                                 type="text"
                                 value={this.state.firstName}
                                 onChange={this.onChange}
                                 className="input"/>
                    </div>

               </div>

               <div className="row">
                       <div className="left">
                             <label>Job Title:</label>
                       </div>

                        <div className="right">
                              <input
                                    placeholder="Support Customer Fleet"
                                    name="jobTitle"
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                    className="input"/>
                       </div>
                       <div className="checkmark">
                          <Input id="input" type="checkbox" />
                          <Label HTMLfor="input">Default</Label>
                       </div>

                  </div>

              <h4>Customer name and contact</h4>
              <div className="wrap-container">
                  <div className="full-width">
                        <input
                              placeholder="Name and contact"
                              name="nameAndContact"
                              type="text"
                              value={this.state.nameAndContact}
                              onChange={this.onChange}
                              className="input"/>
                  </div>

                  <div className="row">
                     <div className="fifty">
                           <input
                                 placeholder="Phone"
                                 name="phone"
                                 type="text"
                                 value={this.state.phone}
                                 onChange={this.onChange}
                                 className="input"
                                />

                     </div>
                     <div className="fifty">
                           <input
                                 placeholder="Email"
                                 name="email"
                                 type="email"
                                 value={this.state.email}
                                 onChange={this.onChange}
                                 className="input"
                                 />
                     </div>
                  </div>


                  {/* <div className="row cityZip">
                          <div className="left">
                                <input
                                      placeholder="City"
                                      name="city"
                                      type="text"
                                      value={this.state.city}
                                      onChange={this.onChange}
                                      className="input"/>
                          </div>

                           <div className="right select">

                                   <Select
                                     value={states}
                                     onChange={this.handleChange}
                                     options={states}
                                   />

                           </div>
                  </div> */}
              </div>
              <h4>Customer address</h4>
              <div className="wrap-container">
                  <div className="full-width">
                        <input
                              placeholder="Address"
                              name="address"
                              type="text"
                              value={this.state.address}
                              onChange={this.onChange}
                              className="input"/>
                  </div>

                  <div className="row cityZip">
                          <div className="left">
                                <input
                                      placeholder="City"
                                      name="city"
                                      type="text"
                                      value={this.state.city}
                                      onChange={this.onChange}
                                      className="input"/>
                          </div>

                           <div className="right select">
                                   <Select
                                     value={states}
                                     onChange={this.handleChange}
                                     options={states}
                                   />
                           </div>
                  </div>
              </div>
              <div className="row">
                     <div className="left zip">
                       <input
                             placeholder="Zip"
                             name="zip"
                             type="text"
                             value={this.state.zip}
                             onChange={this.onChange}
                             className="input"/>
                     </div>
                </div>

              <h4>Job details:</h4>
              <div className="row">
                <textarea rows="5"></textarea>
              </div>


            {/* <div className="row">
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
            </div> */}
            {/* <p className="smallPrint">By proceeding beyond this page, I agree to terms and conditions.</p>
            <div className="row last">
              <div className="right">
                <input disabled={!this.state.formValid}
                       type="submit"
                       value="Register"
                       className="input btn blue"/>
              </div>
            </div> */}
          </form>
      </div>
    );
  }
}

export default jobForm;

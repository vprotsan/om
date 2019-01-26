import React, { Component } from 'react';
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
      password: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
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
            <div className="row">
              <div className="right">
                <input type="submit" value="Register" className="input btn blue"/>
              </div>
            </div>
          </form>
    );
  }
}

export default Step1;

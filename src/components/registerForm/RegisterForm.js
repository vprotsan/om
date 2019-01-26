import React from 'react';


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone or email',
      email: 'Email',
      dob: 'Date of Birth',
      businessName: 'Business name',
      password: 'Password'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('You have been registered: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="register step1">
          <form onSubmit={this.handleSubmit}>


            <div className="row">
               <div className="left">
                   <label>First name</label>
                     <input
                           name="firstName"
                           type="text"
                           value={this.state.firstName}
                           onChange={this.handleInputChange}
                           className="input"/>

               </div>
               <div className="right">
                   <label>Last name</label>
                     <input
                           name="lastName"
                           type="text"
                           value={this.state.lastName}
                           onChange={this.handleInputChange}
                           className="input"/>
               </div>
            </div>

            <div className="row">
                <div className="left">
                        <label>Phone or Email</label>
                        <input
                              name="phone"
                              type="number"
                              value={this.state.phone}
                              onChange={this.handleInputChange}
                              className="input"/>
                </div>
                <div className="right">
                      <label>Email address</label>
                      <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            className="input"/>
                  </div>
            </div>

            <div className="column">
              <div className="left">
                 <label>Date of Birth</label>
                  <input
                        name="dob"
                        type="date"
                        value={this.state.dob}
                        onChange={this.handleInputChange}
                        className="input" />
            </div>
            <div className="left">
                <label>Business Name</label>
                <input
                      name="businessName"
                      type="text"
                      value={this.state.businessName}
                      onChange={this.handleInputChange}
                      className="input" />
            </div>
            <div className="left">
               <label>Password</label>
                <input
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      className="input"/>
            </div>
          </div>
            <div className="right">
              <input type="submit" value="Register" className="input btn"/>
            </div>
          </form>
      </div>
    );
  }
}

export default RegisterForm;

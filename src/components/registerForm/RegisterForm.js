import React from 'react';
import './css/index.css';
import Step1 from './step1.js';
import Step2 from './step2.js';


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextStep: false,
      registered: false
    };
    this.submitStepOne = this.submitStepOne.bind(this);
  }

  submitStepOne = (event) => {
    console.log(this.state);
    event.preventDefault();
    this.setState({
        nextStep: true
    })
  }

  submitStepTwo = (event) => {
    console.log(this.state);
    event.preventDefault();
    //this is where we make api call
    // axios.post(`https://......../${this.state.inputValue}&page=${pageNumber}`)
    //   .then((data) => {
    //     console.log(data)
    //     this.setState({
    //       registered: true
    //     })
    //
    //   })
  }

  render() {
    const formToShow = this.state.nextStep
                        ?
                        <Step2 handleSubmit={this.submitStepTwo}/>
                        :
                        <Step1 handleSubmit={this.submitStepOne}/>
    return (
      <div>
          { formToShow }
      </div>

      // <div className="register step1">
      //    <h3>New to Gignav? Register!</h3>
      //     <form onSubmit={this.handleSubmit}>
      //
      //
      //       <div className="row">
      //          <div className="left">
      //              <label>First name</label>
      //                <input
      //                      placeholder="First name"
      //                      name="firstName"
      //                      type="text"
      //                      value={this.state.firstName}
      //                      onChange={this.handleInputChange}
      //                      className="input"/>
      //
      //          </div>
      //          <div className="right">
      //              <label>Last name</label>
      //                <input
      //                      placeholder="Last name"
      //                      name="lastName"
      //                      type="text"
      //                      value={this.state.lastName}
      //                      onChange={this.handleInputChange}
      //                      className="input"/>
      //          </div>
      //       </div>
      //
      //       <div className="row">
      //           <div className="left">
      //                   <label>Phone or Email</label>
      //                   <input
      //                         placeholder="Phone or Email"
      //                         name="phone"
      //                         type="number"
      //                         value={this.state.phone}
      //                         onChange={this.handleInputChange}
      //                         className="input"/>
      //           </div>
      //           <div className="right">
      //                 <label>Email address</label>
      //                 <input
      //                       placeholder="Email address"
      //                       name="email"
      //                       type="email"
      //                       value={this.state.email}
      //                       onChange={this.handleInputChange}
      //                       className="input"/>
      //             </div>
      //       </div>
      //
      //       <div className="column">
      //         <div className="left">
      //            <label>Date of Birth</label>
      //             <input
      //                   placeholder="Date of Birth"
      //                   name="dob"
      //                   type="date"
      //                   value={this.state.dob}
      //                   onChange={this.handleInputChange}
      //                   className="input" />
      //       </div>
      //       <div className="left">
      //           <label>Business Name</label>
      //           <input
      //                 placeholder="Business Name"
      //                 name="businessName"
      //                 type="text"
      //                 value={this.state.businessName}
      //                 onChange={this.handleInputChange}
      //                 className="input" />
      //       </div>
      //       <div className="left">
      //          <label>Password</label>
      //           <input
      //                 placeholder="Password"
      //                 name="password"
      //                 type="password"
      //                 value={this.state.password}
      //                 onChange={this.handleInputChange}
      //                 className="input"/>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="right">
      //         <input type="submit" value="Register" className="input btn blue"/>
      //       </div>
      //     </div>
      //     </form>
      // </div>
    );
  }
}

export default RegisterForm;

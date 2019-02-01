import React from 'react';
// import './css/index.css';
import Step1 from './step1.js';
import Step2 from './step2.js';
import styled from 'styled-components';


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
    // axios.post(`https://......../${this.state.inputValue}&page=${pageNumber}`)
    //   .then((data) => {
    //     console.log(data)
    //     this.setState({
    //       nextStep: true
    //     })
    //
    //   })
    //temporary:
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
          <div className="registerWrapper">
              { formToShow }
          </div>
    );
  }
}

export default RegisterForm;

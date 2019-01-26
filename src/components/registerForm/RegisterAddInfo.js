import React, { Component } from 'react';
import styled from 'styled-components';


class RegisterAddInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessType: '',
      workers: '',
      description: '',
      businessAddr: '',
      website: ''
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
    alert('Welcome! ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name
          <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                className="input" />
        </label>

        <label>
          Business type:
          <select value={this.state.businessType} onChange={this.handleInputChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <input type="submit" value="Register" className="input btn"/>
      </form>
    );
  }
}

export default RegisterAddInfo;

import React, { Component } from 'react';
import styled from 'styled-components';


class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessType: '',
      workers: '',
      description: '',
      businessAddr: '',
      website: ''
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
        <label>
          First name
          <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.props.onChange}
                className="input" />
        </label>

        <label>
          Business type:
          <select value={this.state.businessType} onChange={this.props.onChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <input disabled={!this.state.formValid}
               type="submit"
               value="Register"
               className="input btn"
               onChange={this.props.handleSubmit}/>
      </form>
    );
  }
}

export default Step2;

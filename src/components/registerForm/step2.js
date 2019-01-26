import React, { Component } from 'react';
import styled from 'styled-components';


class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: '',
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

        <label>Business type:</label>
          <select defaultValue={this.state.businessName} onChange={this.props.onChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

        <label>Workers:</label>
          <select defaultValue={this.state.workers} onChange={this.props.onChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

        <textarea rows="5"></textarea>

        <label>Business address</label>
          <input
                placeholder="Business address"
                name="businessAddr"
                type="text"
                value={this.state.businessAddr}
                onChange={this.onChange}
                className="input"/>

          <label>Website</label>
            <input
                  placeholder="Website"
                  name="website"
                  type="text"
                  value={this.state.website}
                  onChange={this.onChange}
                  className="input"/>

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

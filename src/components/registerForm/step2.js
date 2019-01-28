import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
// import FormErrors from './ErrorsForm.js';

const optionsWorkers = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' }
];

const optionsBusinessType = [
  { value: 'option1', label: 'option1' },
  { value: 'option2', label: 'option2' },
  { value: 'option3', label: 'option3' }
];


const Step2Styles = styled.div`

  textarea {
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    margin: 1em 0;
  }

  .select {
    width: 50%;
  }

  .select > div >div {
    border-radius: 20px;
    border: 1px solid #58595b;
  }

  .fullWidth input {
    width: 100%;
  }

  #fileUploadStep2[type=file] {
    display:none;
    margin:10px;
  }
  #fileUploadStep2[type=file] + label {
    display:inline-block;
    margin: 6px 15px;
    padding: 4px 32px;
    background-color: #3863ad;
    border: solid 1px #666F77;
    color:#ffffff;
  }
  #fileUploadStep2[type=file]:active + label {
    background-image: none;
    background-color:#2D6C7A;
    color:#FFFFFF;
  }

`;


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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectorFiles: FileList){
        console.log(selectorFiles);
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
    const { selectedOption } = this.state;

    return (
      <Step2Styles>
          <h3>Welcome!</h3>
          <div className="panel panel-default">
              {/* <FormErrors formErrors={this.state.formErrors} /> */}
          </div>
          <form onSubmit={this.props.handleSubmit}>

            <div className="row">
               <div className="left select">
                   <label>Business type:</label>
                      <Select
                        placeholder="Business Type"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={optionsWorkers}
                      />
                </div>

                <div className="right select">
                    <label>Workers:</label>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={optionsBusinessType}
                      />
                </div>
            </div>

            <div className="row">
              <textarea rows="5"></textarea>
            </div>

            <div className="row fullWidth">
            <label>Business address</label>
              <input
                    placeholder="Business address"
                    name="businessAddr"
                    type="text"
                    value={this.state.businessAddr}
                    onChange={this.onChange}
                    className="input"/>
            </div>
            <div className="row">
              <div className="left">
                  <label>Website</label>
                    <input
                          placeholder="Website"
                          name="website"
                          type="text"
                          value={this.state.website}
                          onChange={this.onChange}
                          className="input"/>
                </div>
                <div className="right">
                    <input type="file" id="fileUploadStep2"
                           onChange={ (e) => this.handleChange(e.target.files) }/>
                    <label for="fileUploadStep2">Upload Image</label>
                    {/* <input type="file" onChange={ (e) => this.handleChange(e.target.files) } /> */}
                </div>
            </div>
            <div className="row last">
              <input disabled={!this.state.formValid}
                     type="submit"
                     value="Register"
                     className="input btn"
                     onChange={this.props.handleSubmit}/>
              </div>
          </form>
      </Step2Styles>
    );
  }
}

export default Step2;

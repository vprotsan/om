import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
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

  .form-control {
    border-radius: 20px;
    border: 1px solid #58595b;
  }

  ${'' /* textarea {
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    margin: 1em 0;
  }

  .select {
    width: 49%;
  }

  .select:nth-child(1) {
    margin-right: 0.5em;
  }

  .select:nth-child(2){
    margin-left: 0.5em;
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
  } */}

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

  handleSubmit(event) {
    alert('Logged in: ' + this.state.value);
    event.preventDefault();
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

          <Form onSubmit={this.props.handleSubmit}>
            <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="businessType">Business Type</Label>
                      <CustomInput type="select" id="businessType" name="businessType">
                          <option value="">Business Type</option>
                          <option>Value 1</option>
                          <option>Value 2</option>
                          <option>Value 3</option>
                          <option>Value 4</option>
                          <option>Value 5</option>
                      </CustomInput>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="Workers">Workers</Label>
                      <CustomInput type="select" id="Workers" name="Workers">
                            <option value="">Workers</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                      </CustomInput>
                  </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                  <FormGroup>
                      <Label for="exampleText" hidden>Text Area</Label>
                      <Input type="textarea" name="text" id="exampleText" row="5"/>
                  </FormGroup>
                </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="BusinessName" hidden>Business Name</Label>
                  <Input type="text" name="BusinessName" id="BusinessName" placeholder="Business Name" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Website" hidden>Website</Label>
                  <Input type="text" name="Website" id="Website" placeholder="Website" />
                </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                          <Label for="exampleFile">Upload image</Label>
                          <Input type="file" name="file" id="uploadImage" />
                  </FormGroup>
              </Col>
            </Row>
            <p className="smallPrint">By proceeding beyond this page, I agree to terms and conditions.</p>
            <Button>Save</Button>
          </Form>
      </Step2Styles>
    );
  }
}

export default Step2;

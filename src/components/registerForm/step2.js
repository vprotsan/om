import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import styled from 'styled-components';
// import FormErrors from './ErrorsForm.js';


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

    return (
      <div>
          <h3>Welcome!</h3>
          <Form onSubmit={this.props.handleSubmit}>
            <Row form>
              <Col md={6}>
                  <FormGroup>
                      <Label for="businessType">Business Type</Label>
                      <CustomInput type="select"
                                   id="businessType"
                                  name="businessType"
                                  onChange={this.onChange}
                                  value = {this.state.businessType}>
                          <option value="a">Business Type</option>
                          <option value="b">Value 1</option>
                          <option value="d">Value 2</option>
                      </CustomInput>
                  </FormGroup>
              </Col>
              <Col md={6}>
                  <FormGroup>
                      <Label for="Workers">Workers</Label>
                      <CustomInput type="select"
                                  id="Workers"
                                  name="Workers"
                                  onChange={this.onChange}
                                  value = {this.state.Workers}>
                            <option value="">Workers</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
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
                          <Label for="exampleFile" hidden>Upload image</Label>
                          <Input type="file" name="file" id="uploadImage" />
                  </FormGroup>
              </Col>
            </Row>
            <p className="smallPrint">By proceeding beyond this page, I agree to terms and conditions.</p>
            <Button className="blue">Save</Button>
          </Form>
      </div>
    );
  }
}

export default Step2;

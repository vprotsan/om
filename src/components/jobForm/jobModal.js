import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter , CustomInput, Col, Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';

import FormErrors from '../registerForm/ErrorsForm';

const states = [
  { value: 'MA', label: 'MA' },
  { value: 'FL', label: 'FL' },
  { value: 'NY', label: 'NY' }
];

class PostAJobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: false,
      buttonLabel: 'post-a-job',

      firstName: '',
      jobTitle: '',
      defaultToProject: false,
      custName: '',
      hide: false,
      custPhone: '',
      custEmail: '',
      street: '',
      hideCustAddr: false,
      city: '',
      zip: '',
      jobDetails: '',
      hourly: '',
      positions: '',
      duration: '',
      startDate: '',
      network: '',
      networkReg: false,
      networkImm: false,
      groups: '',
      postJobFile: '',
      hidePricePosition: false,

      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleCheckbox(){
    this.setState({
      hidePricePosition: !this.state.hidePricePosition,
      networkReg: !this.state.networkReg,
      networkImm: !this.state.networkImm,
      defaultToProject: !this.state.defaultToProject,
      hide: !this.state.hide,
      hideCustAddr: !this.state.hideCustAddr
    })
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.state.buttonLabel}</Button>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Publish a job</ModalHeader>
          <ModalBody>
            <div className="jobForm">

                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>

                <Form onSubmit={this.props.handleSubmit}>
                        <Row form>
                              <Col md={3}>
                                <Label for="firstName">First name</Label>
                              </Col>
                              <Col md={6}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="firstName"
                                               id="firstName"
                                               placeholder="First name"
                                               value={this.state.firstName}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                        <Row form>
                              <Col md={3}>
                                <Label for="jobTitle">Job Title:</Label>
                              </Col>
                              <Col md={6}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="jobTitle"
                                               id="jobTitle"
                                               placeholder="Job Title"
                                               value={this.state.jobTitle}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                              <Col md={3}>
                                <FormGroup check>
                                      <Label check>
                                        <Input type="checkbox"
                                               checked={this.state.defaultToProject}
                                               value={this.state.defaultToProject}
                                               onChange={this.toggleCheckbox}/>{' '}
                                        Default to Project
                                      </Label>
                                </FormGroup>
                              </Col>
                        </Row>
                        <h5>Customer name and contact</h5>
                        <Row form>
                              <Col md={3}>
                                <Label for="custName" hidden></Label>
                              </Col>
                              <Col md={6}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="custName"
                                               id="custName"
                                               placeholder="Customer Name"
                                               value={this.state.custName}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                              <Col md={3}>
                                <FormGroup check>
                                      <Label check>
                                        <Input type="checkbox"
                                               value={this.state.hide}
                                               onChange={this.toggleCheckbox}/>{' '}
                                        Hide
                                      </Label>
                                </FormGroup>
                              </Col>
                        </Row>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="number"
                                                   name="custPhone"
                                                   id="custPhone"
                                                   placeholder="Phone"
                                                   value={this.state.custPhone}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="email"
                                                   name="custEmail"
                                                   id="custEmail"
                                                   placeholder="Email"
                                                   value={this.state.custEmail}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                </Row>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                        <h5>Customer address</h5>
                        <Row form>
                              <Col md={3}>
                                <Label for="street" hidden></Label>
                              </Col>
                              <Col md={6}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="street"
                                               id="street"
                                               placeholder="Address"
                                               value={this.state.street}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                              <Col md={3}>
                                <FormGroup check>
                                      <Label check>
                                        <Input type="checkbox"
                                               value={this.state.hideCustAddr}
                                               onChange={this.toggleCheckbox}/>{' '}
                                        Hide
                                      </Label>
                                </FormGroup>
                              </Col>
                        </Row>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="text"
                                                   name="city"
                                                   id="city"
                                                   placeholder="city"
                                                   value={this.state.city}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                          <Label for="zip" hidden>State</Label>
                                          <CustomInput type="select"
                                                       onChange={this.onChange}
                                                       id="State"
                                                       name="State"
                                                       value={this.state.state}>
                                              <option value="State">State</option>
                                              <option value="1">Value 1</option>
                                              <option value="2">Value 2</option>
                                              <option value="3">Value 3</option>
                                              <option value="4">Value 4</option>
                                              <option value="5">Value 5</option>
                                          </CustomInput>
                                      </FormGroup>
                                    </Col>
                                </Row>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="number"
                                                   name="zip"
                                                   id="zip"
                                                   placeholder="zip"
                                                   value={this.state.zip}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>

                                    </Col>
                                </Row>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                        <h5>Job details</h5>
                        <Row>
                          <Col md={3}></Col>
                          <Col md={6}>
                                <FormGroup>
                                  <Label for="jobDetails" hidden>Job details</Label>
                                  <Input type="textarea" name="jobDetails" id="jobDetails" />
                                </FormGroup>
                          </Col>
                          <Col md={3}></Col>
                        </Row>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="number"
                                                   name="hourly"
                                                   id="hourly"
                                                   placeholder="Hourly"
                                                   value={this.state.hourly}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                          <Label for="positions" hidden>Positions</Label>
                                          <CustomInput type="select"
                                                        id="positions"
                                                        name="positions"
                                                        onChange={this.onChange}
                                                        value={this.state.positions}>
                                              <option value="2 positions">2 positions</option>
                                              <option value="1 positions">Value 1</option>
                                              <option value="3 positions">Value 2</option>
                                              <option value="4 positions">Value 3</option>
                                              <option value="5 positions">Value 4</option>
                                              <option value="6 positions">Value 5</option>
                                          </CustomInput>
                                      </FormGroup>
                                    </Col>
                                </Row>
                              </Col>
                              <Col md={3}>
                                <FormGroup check>
                                      <Label check>
                                        <Input type="checkbox"
                                               value={this.state.hidePricePosition}
                                               onChange={this.toggleCheckbox}/>{' '}
                                        Hide
                                      </Label>
                                </FormGroup>
                              </Col>
                        </Row>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="text"
                                                   name="startDate"
                                                   id="startDate"
                                                   placeholder="Start date"
                                                   value={this.state.startDate}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                          <Label for="duration" hidden>Duration</Label>
                                          <CustomInput type="select"
                                                       id="duration"
                                                       name="duration"
                                                       value={this.state.duration}
                                                       onChange={this.onChange}>
                                              <option value="1 month">1 month</option>
                                              <option value="1 month">Value 1</option>
                                              <option value="2 month">Value 2</option>
                                              <option value="3 month">Value 3</option>
                                              <option value="4 month">Value 4</option>
                                              <option value="5 month">Value 5</option>
                                          </CustomInput>
                                      </FormGroup>
                                    </Col>
                                </Row>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                        <h5>Network</h5>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="network"
                                               id="network"
                                               placeholder="Network"
                                               value={this.state.network}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                        <Row>
                          <Col md={3}></Col>
                          <Col md={6}>
                            <Row>
                                <Col md={6}>
                                  <FormGroup check>
                                        <Label check>
                                          <Input type="checkbox"
                                                 value={this.state.networkReg}
                                                 onChange={this.toggleCheckbox}/>{' '}
                                          Regular
                                        </Label>
                                  </FormGroup>
                                </Col>
                                <Col md={6}>
                                  <FormGroup check>
                                        <Label check>
                                          <Input type="checkbox"
                                                 value={this.state.networkImmed}
                                                 onChange={this.toggleCheckbox}/>{' '}
                                          Immediate
                                        </Label>
                                  </FormGroup>
                                </Col>
                            </Row>
                          </Col>
                          <Col md={3}></Col>
                        </Row>
                        <h5>Guilds groups</h5>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                  <FormGroup>
                                        <Label for="groups" hidden></Label>
                                        <Input type="text"
                                               name="groups"
                                               id="groups"
                                               placeholder="Groups"
                                               value={this.state.groups}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                        <Row form>
                              <Col md={3}></Col>
                              <Col md={6}>
                                  <FormGroup>
                                    <Label for="postJobFile">Attach file</Label>
                                    <Input type="file" name="postJobFile" id="postJobFile" />
                                  </FormGroup>
                              </Col>
                              <Col md={3}></Col>
                        </Row>
                </Form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Publish job</Button>{' '}
            <Button color="main" onClick={this.toggle}>Save draft</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.string,
  toggle:  PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),

  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  innerRef: PropTypes.object,
}

export default PostAJobModal;

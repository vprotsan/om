import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter , CustomInput} from 'reactstrap';
import { Col, Row, Button, Form, FormGroup} from 'reactstrap';
import { Label, Input, FormText} from 'reactstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';

const states = [
  { value: 'MA', label: 'MA' },
  { value: 'FL', label: 'FL' },
  { value: 'NY', label: 'NY' }
];

class PostAJobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      buttonLabel: 'post-a-job'
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // onChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //
  //   this.setState({
  //     [name]: value
  //   });
  // }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.state.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Publish a job</ModalHeader>
          <ModalBody>
            <div className="jobForm">
                <h3>Publish a job</h3>
                {/* <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div> */}

                <Form onSubmit={this.props.handleSubmit}>
                        <Row form>
                              <Col md={4}>
                                <Label for="firstName">First name</Label>
                              </Col>
                              <Col md={8}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="firstName"
                                               id="firstName"
                                               placeholder="First name"
                                               value={this.state.firstName}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                        </Row>
                        <Row form>
                              <Col md={4}>
                                <Label for="jobTitle">Job Title:</Label>
                              </Col>
                              <Col md={8}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="jobTitle"
                                               id="jobTitle"
                                               placeholder="Job Title"
                                               value={this.state.jobTitle}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                        </Row>
                        <h4>Customer name and contact</h4>
                        <Row form>
                              <Col md={4}>
                                <Label for="jobTitle" hidden></Label>
                              </Col>
                              <Col md={8}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="jobTitle"
                                               id="jobTitle"
                                               placeholder="Job Title"
                                               value={this.state.jobTitle}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                        </Row>

                        <Row form>
                              <Col md={4}>

                              </Col>
                              <Col md={8}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="number"
                                                   name="Phone"
                                                   id="Phone"
                                                   placeholder="Phone"
                                                   value={this.state.phone}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="email"
                                                   name="email"
                                                   id="email"
                                                   placeholder="Email"
                                                   value={this.state.email}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <h4>Customer address</h4>
                        <Row form>
                              <Col md={4}>
                                <Label for="street" hidden></Label>
                              </Col>
                              <Col md={8}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="street"
                                               id="street"
                                               placeholder="Address"
                                               value={this.state.street}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
                        </Row>

                        <Row form>
                              <Col md={4}>

                              </Col>
                              <Col md={8}>
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
                                          <CustomInput type="select" id="State" name="State">
                                              <option value="">State</option>
                                              <option>Value 1</option>
                                              <option>Value 2</option>
                                              <option>Value 3</option>
                                              <option>Value 4</option>
                                              <option>Value 5</option>
                                          </CustomInput>
                                      </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row form>
                              <Col md={4}>

                              </Col>
                              <Col md={8}>
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
                        </Row>
                        <h4>Job details</h4>
                        <Row>
                          <Col md={4}>

                          </Col>
                          <Col md={8}>
                                <FormGroup>
                                  <Label for="exampleText" hidden>Job details</Label>
                                  <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row form>
                              <Col md={4}>

                              </Col>
                              <Col md={8}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="number"
                                                   name="zip"
                                                   id="zip"
                                                   placeholder="Hourly"
                                                   value={this.state.Hourly}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                          <Label for="positions" hidden>Positions</Label>
                                          <CustomInput type="select" id="positions" name="positions">
                                              <option value="">2 positions</option>
                                              <option>Value 1</option>
                                              <option>Value 2</option>
                                              <option>Value 3</option>
                                              <option>Value 4</option>
                                              <option>Value 5</option>
                                          </CustomInput>
                                      </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row form>
                              <Col md={4}>

                              </Col>
                              <Col md={8}>
                                <Row>
                                    <Col md={6}>
                                      <FormGroup>
                                            <Input type="number"
                                                   name="zip"
                                                   id="zip"
                                                   placeholder="Hourly"
                                                   value={this.state.Hourly}
                                                   onChange={this.onChange}/>
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                          <Label for="positions" hidden>Positions</Label>
                                          <CustomInput type="select" id="positions" name="positions">
                                              <option value="">2 positions</option>
                                              <option>Value 1</option>
                                              <option>Value 2</option>
                                              <option>Value 3</option>
                                              <option>Value 4</option>
                                              <option>Value 5</option>
                                          </CustomInput>
                                      </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <h4>Guilds groups</h4>
                        <Row form>
                              <Col md={4}>
                                <Label for="street" hidden></Label>
                              </Col>
                              <Col md={8}>
                                  <FormGroup>
                                        <Input type="text"
                                               name="street"
                                               id="street"
                                               placeholder=""
                                               value={this.state.street}
                                               onChange={this.onChange}/>
                                  </FormGroup>
                              </Col>
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
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  // if modal should be centered vertically in viewport
  centered: PropTypes.bool,
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // backdropTransition - controls backdrop transition
  // timeout is 150ms by default to match bootstrap
  // see Fade for more details
  // backdropTransition: PropTypes.shape(Fade.propTypes),
  // modalTransition - controls modal transition
  // timeout is 300ms by default to match bootstrap
  // see Fade for more details
  // modalTransition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.object,
}

export default PostAJobModal;

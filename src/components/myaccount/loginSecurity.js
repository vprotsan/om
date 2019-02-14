import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';

const SettingsStyles = styled.div`
  .changingInput.inactive {
    border: 0;
  }

  .changingInput.active {
    border: 1px solid #3863ad;
  }
`

class LoginSecurity extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editPassword: false,
      editName: false,
      editEmail: false
    }
    this.handleChangeFor = this.handleChangeFor.bind(this);
    this.nameChange = React.createRef();
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({ [propertyName]: !this.state[propertyName]});
  }

  render(){
    return (
      <SettingsStyles>
        <Table hover>
            <tbody>
              <tr>
                <th scope="row">
                  <h5>Edit your password</h5>
                  <input type="password"
                         id="editPassword"
                         name="editPassword"
                         className={"changingInput " + (this.state.editPassword ? "active" : "inactive") }
                         readOnly={this.state.editPassword}
                         placeholder="**********"/>
                </th>
                <td>
                  <button onClick={this.handleChangeFor('editPassword')}>Edit</button>
                  {this.state.editPassword ? <button>Save</button> : null}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <h5>Edit your name</h5>
                  <input type="text" className="changingInput" readOnly placeholder="John Doe"/>
                </th>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <th scope="row">
                  <h5>Edit your email</h5>
                  <input type="text" className="changingInput" readOnly placeholder="myemail@gmail.com"/>
                </th>
                <td><button>Edit</button></td>
              </tr>
            </tbody>
          </Table>
      </SettingsStyles>
    )
  }
}

export default LoginSecurity;

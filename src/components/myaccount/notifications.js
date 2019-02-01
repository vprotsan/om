import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';

const SettingsStyles = styled.div`
    .my-account-header .nav-item a {
      font-size: 1.1em;
    }

`;

const Notifications = (props) => (
  <SettingsStyles>
      <Table hover>
            <tbody>
              <tr>
                <th scope="row">
                  <h5>Edit your public profile</h5>
                  <p>Choose how your profile appears to non-logged in members via search engines or permitted services</p>
                </th>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <th scope="row">
                  <h5>Edit your public profile</h5>
                  <p>Choose how your profile appears to non-logged in members via search engines or permitted services</p>
                </th>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <th scope="row">
                  <h5>Edit your public profile</h5>
                  <p>Choose how your profile appears to non-logged in members via search engines or permitted services</p>
                </th>
                <td><button>Edit</button></td>
              </tr>
            </tbody>
          </Table>
    </SettingsStyles>
);

export default Notifications;

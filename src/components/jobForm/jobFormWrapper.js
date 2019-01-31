import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './css/index.css';

import JobForm from './jobForm';


const JobFormWrapper = (props) => (
  <div className="job-form-wrapper">
    <JobForm/>
  </div>
);

export default JobFormWrapper;

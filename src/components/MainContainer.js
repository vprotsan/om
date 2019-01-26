import React from 'react';
import RegisterForm from './registerForm/RegisterForm';
import Grid from 'react-css-grid'

const MainContainer = (props) => {

    return(
      <Grid
          width={320}
          gap={24}>
          <div></div>
          <div></div>
          <div><RegisterForm/></div>
      </Grid>
    )
}

export default MainContainer;

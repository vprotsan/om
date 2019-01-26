import React from 'react';
import RegisterForm from './registerForm/RegisterForm';
import Grid from 'react-css-grid'


// const MainStyles = styled.div`
//     &.input {
//       padding: 0.8em 1.2em;
//     }
// `;

const MainContainer = (props) => {

    return(
      <Grid className="grid-container"
          width={320}
          gap={24}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lorem ut purus ullamcorper hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam luctus et justo eget posuere. Suspendisse libero est, tincidunt eu velit commodo, sodales consectetur nunc. Morbi mi leo, iaculis sed felis et, pellentesque sagittis dolor. Ut sed sem metus. Donec lobortis vulputate lectus, eget dictum est consequat sit amet. Vivamus vehicula, sapien sagittis rhoncus pharetra, enim velit finibus massa, at placerat lorem neque a libero. Mauris at eros vulputate, condimentum lectus sed, venenatis est. Donec bibendum, eros et suscipit dictum, enim massa bibendum felis, ut sodales odio elit eget augue. Cras imperdiet fermentum blandit. Duis fermentum lacus ligula. Curabitur pulvinar sit amet diam dictum dapibus. Aenean ac tincidunt nisi.
            </p>
          </div>
          <div><RegisterForm/></div>
      </Grid>
    )
}

export default MainContainer;

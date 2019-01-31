import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RegisterForm from './registerForm/RegisterForm';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const MainContainer = (props) => {

    return(
      <div className="topWrapper>">
            <Container>
                <Row>
                  <Col xs="6" sm="8">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lorem ut purus ullamcorper hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam luctus et justo eget posuere. Suspendisse libero est, tincidunt eu velit commodo, sodales consectetur nunc. Morbi mi leo, iaculis sed felis et, pellentesque sagittis dolor. Ut sed sem metus. Donec lobortis vulputate lectus, eget dictum est consequat sit amet. Vivamus vehicula, sapien sagittis rhoncus pharetra, enim velit finibus massa, at placerat lorem neque a libero. Mauris at eros vulputate, condimentum lectus sed, venenatis est. Donec bibendum, eros et suscipit dictum, enim massa bibendum felis, ut sodales odio elit eget augue. Cras imperdiet fermentum blandit. Duis fermentum lacus ligula. Curabitur pulvinar sit amet diam dictum dapibus. Aenean ac tincidunt nisi.
                      </p>
                  </Col>
                  <Col sm="4"><RegisterForm/></Col>
                </Row>
           </Container>
      </div>

    )
}

Container.propTypes = {
  fluid:  PropTypes.bool,
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  form: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}

export default MainContainer;

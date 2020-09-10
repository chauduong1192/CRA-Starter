import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Grid, Row } from 'react-styled-flexboxgrid'
import styled from 'styled-components';

import Routers from 'routers';

const Header = styled.header``;
const Footer = styled.footer``;

const App = () => {
  return (
    <Grid>
      <Row><Header>header</Header></Row>
      <Row>
        <Routers />
      </Row>
      <Row><Footer>footer</Footer></Row>
    </Grid>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

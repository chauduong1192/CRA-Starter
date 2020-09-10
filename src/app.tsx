import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';

import Routers from 'routers';

const Header = styled.header``;
const Footer = styled.footer``;

const App = () => {
  return (
    <Flex padding={0} flexDirection="column" minHeight="100%">
        <Header />
        <Box id="body" flex="1 0 auto">
            <Routers />
        </Box>
        <Footer />
    </Flex>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

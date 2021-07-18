import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { MainRouter } from './router';
import { Global, css } from '@emotion/react';

const GlobalStyles = css`
  /* tt commons */
  // TODO : fix me, load up fon face correctly
  @font-face {
    font-family: 'TT Commons Regular';
    font-style: normal;
    font-weight: normal;
    src: local('TT Commons Regular'), url('assets/fonts/tt-commons/TT Commons Extrabold.woff') format('woff');
    }
`;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <MainRouter />
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MainRouter } from './router';
import theme from './utils/theme';
import FontFace from './styles/font-face';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <MainRouter />
      </ChakraProvider>
      <FontFace />
    </>
  );
}

export default App;

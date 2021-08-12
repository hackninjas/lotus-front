import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MainRouter } from './router';
import theme from './utils/theme';
// import {FontFace} from './styles/font-face';
import { UserProvider } from 'context';
import UserDataProvider from './store/context';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <Global styles={GlobalStyles} /> */}
        <UserProvider>
          <UserDataProvider>
            <MainRouter />
          </UserDataProvider>
        </UserProvider>
      </ChakraProvider>
      {/* <FontFace /> */}
    </>
  );
}

export default App;

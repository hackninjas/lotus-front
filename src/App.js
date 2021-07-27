import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MainRouter } from './router';
import theme from './utils/theme';
import { Global, css } from '@emotion/react';

// import {FontFace} from './styles/font-face';
import { UserProvider } from 'context';

import BvnState from 'context/BvnContext/BvnState';

const GlobalStyles = css`
  .react-datepicker__input-container {
    width: '100%';
  }
  .date-picker {
    padding: 0.5rem;
    border: 1px solid #cbd5e0;
    border-radius: 5px;
    width: 30vw;
  }
`;

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BvnState>
          <Global styles={GlobalStyles} />
          <UserProvider>
            <MainRouter />
          </UserProvider>
        </BvnState>
      </ChakraProvider>
      {/* <FontFace /> */}
    </>
  );
}

export default App;

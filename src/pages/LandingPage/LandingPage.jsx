import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { Features } from './Sections/Features';
import { Jumbotron } from './Sections/Jumbotron';



export const LandingPage = () => {
  return (
    <Box>
      <Jumbotron/>
      <Features/>
    </Box>
  );
};

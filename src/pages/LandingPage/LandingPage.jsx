import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { Features } from './Sections/Features';
import { Jumbotron } from './Sections/Jumbotron';
import { Description } from './Sections/Description';



export const LandingPage = () => {
  return (
    <Box>
      <Jumbotron/>
      <Features/>
      <Description/>
    </Box>
  );
};

import React from 'react';
import { Box } from '@chakra-ui/react';
import { Features } from './Sections/Features';
import { Jumbotron } from './Sections/Jumbotron';
import { Description } from './Sections/Description';
import { GetInTouch } from './Sections/GetInTouch';
import { Footer } from './Sections/Footer';

export const LandingPage = () => {
  return (
    <Box overflowX="hidden">
      <Jumbotron />
      <Features />
      <Description />
      <GetInTouch />
      <Footer />
    </Box>
  );
};

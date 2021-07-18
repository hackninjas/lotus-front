import React from 'react';
import {
  Box,
  Flex
} from '@chakra-ui/react';
import { Header } from './Header';
export const LandingPage = () => {
  return (
    <Flex textAlign="center" fontSize="xl" position="relative">
      <Header/>
      <Box flex={0.75} borderWidth={1}>
left
      </Box>
      <Box flex={0.25}>
right
      </Box>
    </Flex>
  );
};

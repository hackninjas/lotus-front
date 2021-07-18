import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Header } from './Header';

export const LandingPage = () => {
  return (
    <Flex textAlign="center" fontSize="xl" position="relative" h="90vh">
      <Header />
      <Flex flex={0.7} direction="column" pt="32"></Flex>
      <Box flex={0.3} pt="32" bg="lotusGreen.100"></Box>
    </Flex>
  );
};

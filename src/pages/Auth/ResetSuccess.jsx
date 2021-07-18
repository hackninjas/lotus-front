import { Box, Heading, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';


export const ResetSuccess = () => {
  return (
    <Box w="80%">
        <Box w="50px">
         <Image src={logo} objectFit="cover" w="100%" />
        </Box>
    </Box>
  );
};

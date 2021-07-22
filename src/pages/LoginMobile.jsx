import { Button } from '@chakra-ui/button';
import { Box, Code } from '@chakra-ui/layout';
import { ArrowBackIcon } from '@chakra-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Login } from './Auth/Login';

export const LoginMobile = () => {
  const history = useHistory()
  return (
    <Box w="100%" p="10">
        <ArrowBackIcon boxSize={6} onClick={() =>  history.goBack()} mb="10"/>
      <Login/>
    </Box>
  );
};

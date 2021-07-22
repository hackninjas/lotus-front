import React from 'react';
import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react';
import { CustomDrawer } from 'shared/CustomDrawer';
import { Login } from 'pages/Auth/Login';

export const Register = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box position="relative" zIndex="100">
      <Button variant="primary" fontWeight="normal" px="10" onClick={onToggle}>
        Open a Bank Account
      </Button>
      <CustomDrawer isOpen={isOpen} onClose={onToggle}>
        <Login/>
      </CustomDrawer>
    </Box>
  );
};

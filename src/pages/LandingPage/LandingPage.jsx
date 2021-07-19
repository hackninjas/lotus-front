import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  useDisclosure,
  Code,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';
import { CustomDrawer } from '../../shared/CustomDrawer';
import { Login } from 'pages/Auth/Login';
import { Account } from 'pages/Auth/Account';
import { ForgotPassword } from 'pages/Auth/ForgotPassword';
import { ResetPassword } from 'pages/Auth/ResetPassword';
import { ResetSuccess } from 'pages/Auth/ResetSuccess';

export const LandingPage = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex textAlign="center" fontSize="xl" position="relative" h="90vh">
      <Box flex={0.7}>
        <Flex py="10" pl="14" alignItems="center">
          <Box w="50px">
            <Image src={logo} objectFit="cover" w="100%" />
          </Box>
        </Flex>
        <Code>Landing page</Code>
      </Box>
      <Box flex={0.3} bg="lotusGreen.100">
        <Flex py="10" px="14" justifyContent="flex-end">
          <Button
            variant="primaryOutline"
            fontSize="sm"
            fontWeight="normal"
            px="10"
            onClick={onToggle}
          >
            Login
          </Button>
        </Flex>
        <CustomDrawer isOpen={isOpen} onClose={onToggle}>
          {/* <Login /> */}
          {/* <Account /> */}
          {/* <ForgotPassword/> */}
          {/* <ResetPassword/> */}
          <ResetSuccess/>
        </CustomDrawer>
      </Box>
    </Flex>
  );
};

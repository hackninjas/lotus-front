import { Box, Heading, Text } from '@chakra-ui/layout';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Divider,
  Flex,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
// import { Link as RLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { CustomDrawer } from 'shared/CustomDrawer';
import { Login } from './Login';

export const Register = () => {
    const { isOpen, onToggle } = useDisclosure();
  return (
      <>
    <Box w="100%">
      <Heading color="lotusBlue.400" textAlign="left">
      Register
      </Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
        Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            FullName
          </FormLabel>
          <Input type="email" placeholder="Enter your name" />
        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Email
          </FormLabel>
          <Input type="email" placeholder="Enter email" />
        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Password
          </FormLabel>
          <Input type="password" placeholder="Enter password" />
        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            confirm Password
          </FormLabel>
          <Input type="password" placeholder="Confirm password" />
        </FormControl>
        <Button
          variant="primary"
          // color="white"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          // bg="lotusBlue.400"
          // onClick={}
        >
          Open Bank Account
        </Button>
      </form>
      {/* <Box textAlign="center" mt="4">
        <Link
          color="lotusBlue.400"
          fontSize="xs"
          fontWeight="bold"
          textAlign="left"
          textAlign="center"
          as={RLink}
          to="/recover-password"
        >
          Forgot Password?
        </Link>
      </Box> */}
      <Text mt={10} fontSize="xs" textAlign="center">
      Already have a bank account? 
        <Link onClick={onToggle}>
          <Text as="u" color="lotusBlue.400" fontWeight="bold">
            Login
          </Text>
        </Link>
      </Text>
      <Divider variant="dashed" fontWeight="bold" mt={6}></Divider>
      <Text fontSize="xs" my={4} textAlign="center">
        or continue
      </Text>
      <Flex
        justifyContent="space-between"
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex
          cursor="pointer"
          _hover={{
            bg: 'lotusBlue.300',
          }}
          bg="lotusBlue.200"
          borderRadius="full"
          alignItems="center"
          p="0.5"
          pr="2.5"
          flex={0.45}
          mb={{ base: '8', sm: '0' }}
        >
          <Flex
            height="43px"
            width="43px"
            borderRadius="full"
            alignItems="center"
          >
            <FaFacebook
              style={{ fill: 'white', width: '100%', height: '100%' }}
            />
          </Flex>
          <Text color="white" fontSize="sm" ml="3">
            {' '}
            With Facebook
          </Text>
        </Flex>
        <Flex
          cursor="pointer"
          _hover={{
            bg: 'whitesmoke',
          }}
          bg="white"
          borderRadius="full"
          alignItems="center"
          p="0.5"
          pr="2.5"
          flex={0.45}
          borderWidth={1}
        >
          <Flex
            height="43px"
            width="43px"
            borderRadius="full"
            alignItems="center"
            bg="white"
            borderWidth={1}
          >
            <FcGoogle style={{ width: '100%', height: '80%' }} />
          </Flex>
          <Text color="black" fontSize="sm" ml="3">
            With Google
          </Text>
        </Flex>
      </Flex>
    </Box>
    <CustomDrawer isOpen={isOpen} onClose={onToggle}>
         <Login/>
      </CustomDrawer>
    </>
  );
};

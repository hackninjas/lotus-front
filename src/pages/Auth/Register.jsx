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
  CircularProgress
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { CustomDrawer } from 'shared/CustomDrawer';
import { Login } from './Login';
import { UserContext } from '../../context/user';
import API from '../../api/axios';

import ErrorMessage from 'shared/ErrorMessage';

export const Register = () => {
  const { isOpen, onToggle } = useDisclosure();
   const { setUserData } = useContext(UserContext);
    const validate = (values) => {
    const errors = {};
    // Validate email
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
    // Validate Password
   if (!values.password) {
     errors.password = 'Required';
   } else if (values.password.length < 8) {
     errors.password = 'Invalid password length';
   }
   setFieldErrors(errors)
 };

  const defaultState = {
    fullName: "",
    email : "",
    password : "",
    confirmPassword : ""
  }

 const { replace } = useHistory();
    const [fieldErrors, setFieldErrors] = useState(defaultState);
    const [state, setState] = useState(defaultState);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

     const updateState = (key, value) => {
      setError(null);
      setFieldErrors({
      ...fieldErrors,
      [key]: '',
    });
    setState({
      ...state,
      [key]: value,
    });
  };

  const register = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    validate(state);
    const { fullName, email } = state;
    API.post('/api/Onboarding/register_user', { fullName, email })
      .then((res) => {
        const data = res.data.data;
        localStorage.setItem('token', data.accessToken);
         setUserData({ 
          name: fullName,
        })
        setIsLoading(false);
         replace('/login');
      })
      .catch((e) => {
        if (!e.response) {
          setError('Network Error. Try Again!');
          setIsLoading(false);
        }
        let message = e.response?.data?.message;
          setError(message);
          setIsLoading(false);
      });
  };
 
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
      <form onSubmit={register}>
          {error && <ErrorMessage message={error} />}
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            FullName
          </FormLabel>
          <Input 
          type="text" 
          placeholder="Enter your name" 
          onChange = {(event) => updateState('FullName', event.currentTarget.value)}
          />
        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Email
          </FormLabel>
          <Input 
          type="email" 
          placeholder="Enter email" 
           onChange = {(event) => updateState('email', event.currentTarget.value)}
          />
          {fieldErrors.email && <Text color="red">{ fieldErrors.email }</Text> }

        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Password
          </FormLabel>
          <Input 
          type="password" 
          placeholder="Enter password" 
          onChange = {(event) => updateState('password', event.currentTarget.value)}
          />
          {fieldErrors.password && <Text color="red">{ fieldErrors.password }</Text> }

        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            confirm Password
          </FormLabel>
          <Input type="password" placeholder="Confirm password" />
        </FormControl>
        <Button
          variant="primary"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
        >
            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="white" />
                            ): (
                                'Login'
                            )}        
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
      <Text mt={10} fontSize="xs" textAlign="center" color="#2D2D2D" fontWeight="bold">
      Already have a bank account? 
        <Link onClick={onToggle}>
          <Text as="u" color="lotusBlue.400" fontWeight="bold" ml={2}>
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

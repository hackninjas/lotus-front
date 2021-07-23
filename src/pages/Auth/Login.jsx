import { Box, Heading, Text } from '@chakra-ui/layout';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Divider,
  Flex,
  CircularProgress,
  useDisclosure
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { CustomDrawer } from 'shared/CustomDrawer';
import {Account } from './Account';
import { UserContext } from '../../context/user';
import API from '../../api/axios';

import ErrorMessage from 'shared/ErrorMessage';

export const Login = () => {
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
    email : "",
    password : ""
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

    const login = async event => {
        event.preventDefault();
        setIsLoading(true);
        validate(state);
        API.post('/api/Onboarding/login', state)
      .then((res) => {
        const data = res.data.data;
        const {firstName, lastName, passport} = data.profile;
        const {accountNumber, accountBalance} = data.account;
        localStorage.setItem('token', data.accessToken);
        setUserData({ 
          name: `${firstName} ${lastName}`,
          balance: accountBalance ? accountBalance : 0.00,
          image: passport ? passport : '',
          accountNumber: accountNumber,
        })
        console.log(data);
        setIsLoading(false);
        replace('/dashboard');
      })
      .catch((e) => {
       if (!e.response) {
        setError('Network Error. Try again!');
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
        Welcome back
      </Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
        Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form  onSubmit={login}>
          {error && <ErrorMessage message={error} />}
        <FormControl mt={8}>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Email
          </FormLabel>
          <Input 
          color="lotusBlue.400"
          type="email" 
          placeholder="Enter email"                                 
          onChange = {(event) => updateState('email', event.currentTarget.value)}
        />
        {fieldErrors.email && <Text color="red">{ fieldErrors.email }</Text> }
        </FormControl>
        <FormControl mt={8}>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Password
          </FormLabel>
          <Input
            color="lotusBlue.400"
           type="password"
            placeholder="Enter password" 
            onChange = {(event) => updateState('password', event.currentTarget.value)}
            />
        </FormControl>
        <Button
          variant="primary"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          type="submit"
        >
           {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="white" />
                            ): (
                                'Login'
                            )}
        </Button>
      </form>
      <Box textAlign="right" mt="4" color="#2D2D2D" fontWeight="bold" fontSize="xs">
        <Link
          to="/recover-password"
        >
          Forgot Password?
        </Link>
      </Box>
      <Text mt={10} fontSize="xs" textAlign="left" color="#2D2D2D" fontWeight="bold">
        Don't have a bank account with us?
        <Link onClick={onToggle}>
          <Text as="u" color="lotusBlue.400" fontWeight="bold" ml={2}>
            Open A Bank Account
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
    {/* <CustomDrawer isOpen={isOpen} onClose={onToggle}>
         <Account/>
      </CustomDrawer> */}
      </>
  );
};

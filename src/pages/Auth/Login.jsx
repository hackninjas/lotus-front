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
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Link as RLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { CustomDrawer } from 'shared/CustomDrawer';
import {Account } from './Account';


import API from '../../api/axios';

import ErrorMessage from 'shared/ErrorMessage';
// import {userLogin} from 'utils/mockApi'

export const Login = () => {
  const { isOpen, onToggle } = useDisclosure();
  
  const defaultState = {
    email : "",
    password : ""
  }

  const { push, replace } = useHistory();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [state, setState] = useState(defaultState);
    const [error, /*setError*/] = useState('');
    const [/*toastValue*/, setToastValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const updateState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

    const login = async event => {
        event.preventDefault();
        setIsLoading(true);

        API.post('/api/Onboarding/login', state)
      .then((res) => {
        const data = res.data.data;
        // localStorage.setItem('token', data);
        console.log(data);
        setIsLoading(false);
        replace('/login');
      })
      .catch((e) => {
        // setTimeout(() => {
        // }, 3000);

        let message = e.response?.data?.message;
        if (!message) {
          setToastValue('Network error');
          setIsLoading(false);
          console.log(message)
          push('/login');
          return;
        }
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
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Email
          </FormLabel>
          <Input 
          type="email" 
          placeholder="Enter email"                                 
          onChange = {(event) => updateState('email', event.currentTarget.value)}
 />
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
      <Box textAlign="center" mt="4">
        <Link
          color="lotusBlue.400"
          fontSize="xs"
          fontWeight="bold"
          textAlign="left"
          // textAlign="center"
          as={RLink}
          to="/recover-password"
        >
          Forgot Password?
        </Link>
      </Box>
      <Text mt={10} fontSize="xs" textAlign="center">
        Don't have a bank account with us?
        <Link onClick={onToggle}>
          <Text as="u" color="lotusBlue.400" fontWeight="bold">
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
    <CustomDrawer isOpen={isOpen} onClose={onToggle}>
         <Account/>
      </CustomDrawer>
      </>
  );
};

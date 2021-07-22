import { Box, Heading, Text } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button, Divider, Flex, Checkbox} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export const Account = () => {
  return (
    <Box w="100%">
      <Heading color="lotusBlue.400" textAlign="left">Open a bank account</Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>Sed a magna semper, porta purus eu, ullamcorper liguia.
       Nam sit amet 
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form>
        <FormControl mt={4} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">FullName</FormLabel>
              <Input type="email" placeholder="Enter Your Name" />
            </FormControl>
        <FormControl mt={4} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Email</FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>
        <FormControl mt={4} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Password</FormLabel>
              <Input type="email" placeholder="Enter password" />
            </FormControl>
        <FormControl mt={4} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Confirm Password</FormLabel>
              <Input type="password" placeholder="confirm password" />
            </FormControl>
             <Button
        variant="primary"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          // onClick={}
        >
          Open Bank Account
        </Button>

    
      </form>
      <Checkbox mt={4}>
          <Text fontSize="xs" color="lotusBlue.400">
               I've read and agree to the <Link>terms of service</Link> and <Link>privacy policy.</Link>
                </Text>
           </Checkbox>
       
      <Text mt={10} fontSize="xs" fontWeight="bold">
        Already have an account? 
        <Link to="/login">
            <Text as="u" color ="lotusBlue.400" fontWeight="bold">Login</Text>
        </Link>
        </Text>
        <Divider 
        variant="dashed"
        fontWeight="bold"
        mt={6}
        >
          </Divider>
       <Text fontSize="xs" my={4}>or continue</Text>
       <Flex justifyContent="space-between">
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
            <FcGoogle
              style={{ width: '100%', height: '80%' }}
            />
          </Flex>
          <Text color="black" fontSize="sm" ml="3">
            With Google
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

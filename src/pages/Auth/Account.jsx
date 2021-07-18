import { Box, Heading, Text } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button, Divider, HStack, Checkbox} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

export const Account = () => {
  return (
    <Box w="80%">
      <Heading color="lotusBlue">Open a bank account</Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>Sed a magna semper, porta purus eu, ullamcorper liguia.
       Nam sit amet 
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form>
        <FormControl mt={8} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Email</FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>
        <FormControl mt={8} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Password</FormLabel>
              <Input type="password" placeholder="Enter password" />
            </FormControl>
             <Button
        variant="primaryOutline"
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
          <Text fontSize="xs" color="lotusBlue">
               I've read and agree to the <Link>terms of service</Link> and <Link>privacy policy.</Link>
                </Text>
           </Checkbox>
       
      <Text mt={10} fontSize="xs" fontWeight="bold">
        Already have an account? 
        <Link to="/login">
            <Text as="u" color ="lotusBlue" fontWeight="bold">Login</Text>
        </Link>
        </Text>
        <Divider 
        variant="dashed"
        fontWeight="bold"
        mt={6}
        >
          </Divider>
       <Text fontSize="xs" mt={4}>or continue</Text>
       <HStack justifyContent="space-between">
       <Button 
       colorScheme="facebook" 
       leftIcon={< FaFacebook/>}
       fontSize="xs"
       border="1px solid #707070"
       borderRadius="40px"
       w={60}
       >
          with facebook
  </Button>
       <Button 
       color="black" 
       colorScheme="google" 
       leftIcon={< FcGoogle/>}
       fontSize="xs"
       border="1px solid #707070"
       borderRadius="40px"
       w={60}
       >
          with google
  </Button>
       </HStack>
    </Box>
  );
};

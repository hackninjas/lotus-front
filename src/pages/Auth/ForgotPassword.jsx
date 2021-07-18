import { Box, Heading, Text } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import React from 'react';

export const ForgotPassword = () => {
  return (
    <Box w="80%">
      <Heading color="lotusBlue">Forgot Password</Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>Sed a magna semper, porta purus eu, ullamcorper liguia.
       Nam sit amet 
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form>
        <FormControl mt={8} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Email</FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>
             <Button
          color="white"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          variant="primaryOutline"
        >
           Reset Password
        </Button>
      </form>
    </Box>
  );
};

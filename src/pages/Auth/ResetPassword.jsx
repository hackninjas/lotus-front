import { Box, Heading, Text } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import React from 'react';

export const ResetPassword = () => {
  return (
    <Box>
      <Heading color="lotusBlue.400" textAlign="left">Reset Password</Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
          Please type in a new password and confirm the password to
          completely reset your password.
      </Text>
      <form>
        <FormControl mt={8} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">New Password</FormLabel>
              <Input type="password" placeholder="" />
        </FormControl>
        <FormControl mt={8} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Confirm New Password</FormLabel>
              <Input type="password" placeholder="" />
        </FormControl>
             <Button
          color="white"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          variant="primary"
          // onClick={}
        >
           Continue
        </Button>
      </form>
    </Box>
  );
};

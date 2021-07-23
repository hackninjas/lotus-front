import React from 'react';
import { Box } from '@chakra-ui/layout';
import {
  Flex,
  Text,
  FormControl, FormLabel, Input, Textarea
} from '@chakra-ui/react';

export const Address = () => {
  return (
    <Box>
      <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
          Residential Information
        </Text>
        <Text color="#2D2D2D" textAlign="left" fontSize="sm" mt={6}>Sed a magna semper, porta purus eu, ullamcorper liguia.
       Nam sit amet 
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>

      <form>
         <Flex justifyContent="space-between">
            <FormControl mt={8} >
            <FormLabel color="#2D2D2D">
                Country
            </FormLabel>
            <Input type="text" placeholder="Your country"/>
            </FormControl>
            <FormControl mt={8} ml={8}>
            <FormLabel color="#2D2D2D">
                State
            </FormLabel>
            <Input type="text" placeholder="State"/>
            </FormControl>
            <FormControl mt={8}ml={8}>
            <FormLabel color="#2D2D2D">
                City
            </FormLabel>
            <Input type="text" placeholder="City"/>
            </FormControl>
        </Flex>  
        </form>
        <Text mt={8}>Your Address</Text>
        <Textarea 
        placeholder="Address"
        size="sm"
        />
    </Box>
  );
};

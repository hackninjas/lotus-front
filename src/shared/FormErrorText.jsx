import React from 'react';
import { Text } from '@chakra-ui/react';

export const FormErrorText = ({ errorMessage, isTouched }) => {
    return errorMessage && isTouched ? (
      <Text fontSize="xs" color="red" mt="2">
        {errorMessage}
      </Text>
    ) : null
  
};

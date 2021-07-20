import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/layout';
import {Avatar, IconButton} from '@chakra-ui/react'

export const PhotoUpload = () => {
  return (
    <Box>
        <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
          Upload Photo
        </Text>    
         <Text color="#2D2D2D" textAlign="left" fontSize="sm" mt={6}>
         Please, kindly upload a clear picture of yourself for image verification. A passport
         photo is most recommended for this process. You can change your image later.
       </Text>

        <Flex
        direction="column" >
          <IconButton
            colorScheme="none"
            aria-label="Call Segun"
            icon={ <Avatar  size="2xl" left="30" top="130" />}
          />
        </Flex>

    </Box>
  );
};

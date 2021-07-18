import React from 'react';
import { Box, VStack, Code, Grid, Text } from '@chakra-ui/react';

export const LandingPage = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>
             <Code fontSize="xl">Landing Page</Code> 
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};

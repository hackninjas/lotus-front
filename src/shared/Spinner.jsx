import React from 'react';

import { Spinner } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function SpinnerLoader() {
  return (
    <Box
      h="100vh"
      w="100%"
      pos="fixed"
      zIndex={10000}
      bg="rgba(0 0 0/0.2)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner color="green.500" size="xl" />
    </Box>
  );
}

export default SpinnerLoader;

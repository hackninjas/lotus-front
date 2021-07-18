import React from 'react';
import { Box, Button, Slide, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export const CustomDrawer = ({ children, isOpen, onClose }) => {
  return (
    <>
      {isOpen && <Box bg="rgba(0,0,0, 0.5)" w="100%" style={{ zIndex: 10 }} />}
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Flex
          h="90vh"
          color="white"
          mt="4"
          bg="white"
          rounded="md"
          shadow="md"
          p="8"
        >
          <Box flex={0.3} />

          <Box flex={0.4}>{children}</Box>

          <Flex justifyContent="flex-end" flex={0.3}>
            <Button
              onClick={onClose}
              borderRadius="50%"
              h="12"
              w="12"
              borderWidth={1}
              mr="10"
            >
              <CloseIcon color="lotusBlack" />
            </Button>
          </Flex>
        </Flex>
      </Slide>
    </>
  );
};

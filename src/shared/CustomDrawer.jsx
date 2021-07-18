import React from 'react';
import { Box, Button, Slide, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export const CustomDrawer = ({ children, isOpen, onClose }) => {
  return (
    <>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box>
         
          <Flex
            h="95vh"
            color="white"
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
        </Box>
      </Slide>
    </>
  );
};

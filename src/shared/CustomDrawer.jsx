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
            w="100%"
            justifyContent="space-between"
          >
            <Box w="30%" />

            <Box w="35%">{children}</Box>

            <Flex justifyContent="flex-end" w="30%">
              <Button
                onClick={onClose}
                borderRadius="50%"
                h="12"
                w="12"
                borderWidth={1}
              
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

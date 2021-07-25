import React, { useEffect } from 'react';
import { Box, Button, Slide, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export const CustomDrawer = ({ children, isOpen, onClose }) => {

  useEffect(() => {
    if(isOpen){
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  },[isOpen])
  return (
    <>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 1000 }} >
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
            overflow="auto"
           
          >
            <Box w={{md:"30%"}} />

            <Box w={{base:"90%",lg:"35%"}}>{children}</Box>

            <Flex justifyContent="flex-end" w={{md:"30%"}}>
              <Button
                onClick={onClose}
                borderRadius="50%"
                h="12"
                w="12"
                borderWidth={1}
                position="absolute"
              
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

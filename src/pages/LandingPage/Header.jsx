import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';
import { CustomDrawer } from '../../shared/CustomDrawer';

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px="24"
        py="5"
        position="absolute"
        top="0"
        left="0"
        w="100%"
      >
        <Box w="50px">
          <Image src={logo} objectFit="cover" w="100%" />
        </Box>

          <Flex></Flex>

          <Button
            variant="primaryOutline"
            fontSize="sm"
            fontWeight="normal"
            px="10"
            onClick={onToggle}
          >
            Login
          </Button>
      </Flex>
      <CustomDrawer isOpen={isOpen} onClose={onToggle}>

      </CustomDrawer>
    </>
  );
};

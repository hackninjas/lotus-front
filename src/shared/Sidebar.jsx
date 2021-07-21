import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex,
  Link,
} from '@chakra-ui/react';
import { Links } from 'pages/LandingPage/Sections/Jumbotron';
import { CustomDrawer } from './CustomDrawer';
import { Login } from 'pages/Auth/Login';
export const Sidebar = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
              
            {
              <Flex flexWrap="wrap" direction="column" mt="20">
                {Links?.map(({ label, value }) => (
                  <Link fontSize="md" fontWeight="bold" p="5" key={value}>
                    {label}
                  </Link>
                ))}
              </Flex>
            }

            <Button
              variant="primary"
              fontSize="sm"
              fontWeight="normal"
              px="10"
              ml="4"
              mt="2"
              onClick={onToggle}
            >
              Login
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Links } from 'pages/LandingPage/Sections/Jumbotron';

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  return (
    <>
      <Icon onClick={onOpen} as={HamburgerIcon} w={8} h={8} />
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
              onClick={() => history.push('/login')}
            >
              Login
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

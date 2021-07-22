import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  useDisclosure,
  Text,
  Heading,
  Link,
  chakra,
  Stack,
} from '@chakra-ui/react';
import { Link as RLink} from "react-router-dom";

import { CustomDrawer } from 'shared/CustomDrawer';

import { Login } from 'pages/Auth/Login';
import { Account } from 'pages/Auth/Account';
import { ForgotPassword } from 'pages/Auth/ForgotPassword';
import { ResetPassword } from 'pages/Auth/ResetPassword';
import { ResetSuccess } from 'pages/Auth/ResetSuccess';

import lotusGreenBg from 'assets/images/lotusGreen.png';
import creditTwo from 'assets/images/creditTwo.png';
import gradientBg from 'assets/images/gradientBg.png';
import logo from 'assets/images/logo.png';
import { Sidebar } from 'shared/Sidebar';
import { Register } from '../RegisterToggle';

export const Links = [
  {
    label: 'Banking',
    link: 'banking',
  },
  {
    label: 'How it works',
    link: 'how',
  },
  {
    label: 'Features',
    link: 'feature',
  },
  { label: 'About us', link: 'about' },
];

export const Jumbotron = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="relative">
      <Flex
        py="10"
        px={{base:"10",sm:"14"}}
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        zIndex="2"
        w="100vw"
      >
        <Box w="50px">
          <Image src={logo} objectFit="cover" w="100%" />
        </Box>

        <Flex
          flex={{ base: 0.7, lg: 0.5 }}
          justifyContent="space-between"
          flexWrap="wrap"
          display={{base:"none", md:"flex"}}
        >
          {Links?.map(({ label, link }) => (
            <Link fontSize="sm" key={link} as={RLink} to={`/${link}`}>
              {label}
            </Link>
          ))}
        </Flex>
        <Button
          variant="primaryOutline"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          onClick={onToggle}
          display={{base:"none", md:"block"}}
        >
          Login
        </Button>
        <Sidebar/>
      </Flex>

      <Flex position="relative" h="82vh">
        <Box flex={{base:1,sm:0.7}} position="relative" pt="40">
          <Image
            src={gradientBg}
            position="absolute"
            zIndex="1"
            w="100%"
            bottom={{base:"40",sm:"20"}}
            left="0"
          />
          <Stack
            mt="10"
            ml={{ base: '10', sm: '28' }}
            spacing="10"
            w={{base:"80%",sm:"55%"}}
            position="relative"
            zIndex="2"
          >
            <Heading  fontSize={{base:"1.4rem",lg:"4.5rem"}}>
              We are the <chakra.span color="lotusGreen.400">new</chakra.span>{' '}
              <Flex>
                {' '}
                age of Banking
                <Box
                  height="1vw"
                  alignSelf="flex-end"
                  mb="5"
                  w="1vw"
                  bg="lotusGreen.400"
                  borderRadius="50%"
                >
                  &nbsp;
                </Box>
              </Flex>
            </Heading>
            <Text as="p" fontSize="sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
            <Flex alignItems="center" direction={{base:"column", md:"row"}}>
              {/* <Button variant="primary" fontWeight="normal" px="10">
                Open a Bank Account
              </Button> */}
              <Register/>
              <Link fontSize="sm" mt={{base:"4", md:"0"}} ml={{base:"0",md:"10"}} fontWeight="bold">
                Learn More
              </Link>
            </Flex>
          </Stack>
        </Box>
        <Box flex={{base:0,sm:0.3}} bg="lotusGreen.100" position="relative">
          <Image src={lotusGreenBg} position="absolute" top="0" right="0" />
          <Image
            src={creditTwo}
            maxWidth="130%"
            zIndex="1"
            position="absolute"
            top="28"
            right={{ base: '10', lg: '28' }}
          />
          <CustomDrawer isOpen={isOpen} onClose={onToggle}>
            <Login />
            {/* <Account /> */}
            {/* <ForgotPassword/> */}
            {/* <ResetPassword/> */}
            {/* <ResetSuccess/> */}
          </CustomDrawer>
        </Box>
      </Flex>
    </Box>
  );
};

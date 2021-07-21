import React from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  useDisclosure,
  Text,
  Code,
  Heading,
  Link,
  chakra,
  Stack,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';
import { CustomDrawer } from '../../shared/CustomDrawer';
import { Login } from 'pages/Auth/Login';
import { Account } from 'pages/Auth/Account';
import { ForgotPassword } from 'pages/Auth/ForgotPassword';
import { ResetPassword } from 'pages/Auth/ResetPassword';
import { ResetSuccess } from 'pages/Auth/ResetSuccess';

import lotusGreenBg from 'assets/images/lotusGreen.png';
import creditTwo from 'assets/images/creditTwo.png';
import gradientBg from 'assets/images/gradientBg.png';

const Links = [
  {
    label: 'Banking',
    value: 'banking',
  },
  {
    label: 'How it works',
    value: 'how',
  },
  {
    label: 'Features',
    value: 'feature',
  },
  { label: 'About us', value: 'about' },
];

export const LandingPage = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex fontSize="xl" position="relative" h="90vh">
      <Box flex={0.7} position="relative">
        <Image src={gradientBg} position="absolute" zIndex="1" w="100%" bottom="20" left="0"/>
        <Flex
          py="10"
          px="14"
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          zIndex="10"
        >
          <Box w="50px">
            <Image src={logo} objectFit="cover" w="100%" />
          </Box>

          <Flex flex={{base:0.9, lg: 0.5}} justifyContent="space-between" flexWrap="wrap">
            {Links?.map(({ label, value }) => (
              <Link fontSize="sm" key={value}>
                {label}
              </Link>
            ))}
          </Flex>
        </Flex>

        <Stack mt="10" ml={{base:"14",lg:"28"}} spacing="10" w="55%" position="relative" zIndex="20">
          <Heading fontSize="5vw">
            We are the <chakra.span color="lotusGreen.400">new</chakra.span>{' '}
            <br /> age of Banking<chakra.span color="lotusGreen.400">.</chakra.span>
          </Heading>
          <Text as="p" fontSize="sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
          <Flex alignItems="center">
            <Button variant="primary" fontWeight="normal">Open a Bank Account</Button>
            <Link fontSize="sm" ml="10" fontWeight="bold">Learn More</Link>
          </Flex>
        </Stack>
      </Box>
      <Box flex={0.3} bg="lotusGreen.100" position="relative">
        <Image src={lotusGreenBg} position="absolute" top="0" right="0" />
        <Image src={creditTwo} maxWidth="130%" zIndex="1" position="absolute" top="28" right={{base:"10",lg:"28" }}/>
        <Flex py="14" px="14" justifyContent="flex-end">
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
          <Login />
          {/* <Account /> */}
          {/* <ForgotPassword/> */}
          {/* <ResetPassword/> */}
          {/* <ResetSuccess/> */}
        </CustomDrawer>
      </Box>
    </Flex>
  );
};

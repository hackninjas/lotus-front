import React from 'react';
import { Box, Text, Flex, Heading, Image, Stack, Link } from '@chakra-ui/react';
// import { Link as RLink } from 'react-router-dom';

import logo from 'assets/images/logo.png';

export const Links = [
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/',
  },
  {
    label: 'Instagram',
    link: 'https://instagram.com',
  },
  {
    label: 'Twiiter',
    link: 'https://twitter.com',
  },
];

export const Footer = () => {
  return (
    <Box
      mt={{base:"40",lg:"60"}}
      px={{base:"10",lg:"28"}}
      pb="40"
      bgGradient="linear(to-b, white, lotusGreen.100, lotusFadedPink)"
    >
      <Flex
        borderTopWidth={2}
        pt="14"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box w="50px"  mb={{base:"20", md:"0"}} mx={{base:"auto", md:"0"}}>
          <Image src={logo} objectFit="cover" w="100%" />
        </Box>

        <Stack spacing="5" flex={0.25} mb={{ base: '10', md: '0' }}>
          <Heading 
         fontSize={{base:"1.2rem",lg:"2rem"}}
          >Our Address</Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Stack>
        <Stack spacing="5" flex={0.25} mb={{ base: '10', md: '0' }}>
          <Heading 
          fontSize={{base:"1.2rem",lg:"2rem"}}
          >Get In touch</Heading>
          <Flex direction="column">
            {Links?.map(({ label, link }) => (
              <Link fontSize="sm" mb="5" key={link} href={link}>
                {label}
              </Link>
            ))}
          </Flex>
        </Stack>
        <Stack spacing="5" flex={0.25}>
          <Heading 
         fontSize={{base:"1.2rem",lg:"2rem"}}
          >Help Center</Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

import { Box, Flex, Link, Grid } from '@chakra-ui/layout';
import { Button, Image, Text } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';
import React from 'react';

import onboardingBg from 'assets/images/onboarding.png';
import lotusWhiteLogo from 'assets/images/lotusWhite.png';
import lotusWhiteLeaf from 'assets/images/lotusWhiteLeaf.png';

const Steps = ['BVN', 'Personal', 'Address', 'Photo Upload'];

export const Layout = ({ children, step }) => {
  return (
    <Flex h="100vh">
      <Grid
        templateColumns="1fr"
        w="60%"
        py="14"
        px="24"
        boxSizing="border-box"
        borderWidth={5}
      >
        <Box>{children}</Box>
        <Flex justifyContent="space-between" w="100%" justifySelf="self-end">
          <Flex alignSelf="flex-end" direction="column">
            <Text
              fontSize="sm"
              pb="2"
              fontWeight="bold"
              borderStyle="dashed"
              borderBottomWidth={2}
              mb="2"
              w="fit-content"
            >
              {step} of 4
            </Text>
            <Flex>
              {Steps.map((stepName, index) => (
                <Flex key={index} ml={index > 0 ? "2" : "0"}>
                  <Text
                    pb="1"
                    fontSize="sm"
                    mr="1"
                    borderBottomWidth={2}
                    fontWeight={step === (index + 1) ? 'bold' : 'normal'}
                    borderColor={step === (index + 1) ? 'lotusGreen.400' : 'transparent'}
                  >
                    {stepName}
                  </Text>
                  <TriangleUpIcon
                    boxSize={3}
                    mt="1"
                    style={{ transform: 'rotate(90deg)' }}
                    display={index + 1 === Steps.length ? "none" : "block"}
                  />
                </Flex>
              ))}
              
            </Flex>
          </Flex>
          <Flex alignItems="center" alignSelf="flex-end">
            <Link color="lotusBlue.400" fontSize="sm" mr="3.5">
              Save and continue later
            </Link>
            <Button variant="primary" fontSize="sm" fontWeight="normal" px="10">
              Continue
            </Button>
          </Flex>
        </Flex>
      </Grid>
      <Box w="40%" position="relative">
        <Image src={onboardingBg} objectFit="cover" h="100%" w="100%" />
        <Box position="absolute" left="0" top="0" bottom="0" right="0">
          <Flex
            direction="column"
            justifyContent="space-between"
            h="100%"
            px="10"
          >
            <Image
              src={lotusWhiteLogo}
              w="14"
              alignSelf="flex-end"
              mt="10"
              mr="14"
            />
            <Image src={lotusWhiteLeaf} />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

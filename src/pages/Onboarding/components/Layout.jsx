import { Box, Flex, Link, Grid } from '@chakra-ui/layout';
import { Button, Image, Text } from '@chakra-ui/react';
import React from 'react';

import onboardingBg from 'assets/images/onboarding.png';
import lotusWhiteLogo from 'assets/images/lotusWhite.png';
import lotusWhiteLeaf from 'assets/images/lotusWhiteLeaf.png';
import { BreadCrumbItem } from './BreadCrumbItem';

const steps = ['BVN', 'Personal', 'Address', 'Photo Upload'];

export const Layout = ({ children, step, canNext, goNext, changeStep }) => {
  return (
    <Flex h="100vh">
      <Grid
        templateColumns="1fr"
        w="60%"
        py="14"
        px="24"
        boxSizing="border-box"
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
              {step + 1} of 4
            </Text>
            <Flex>
              {steps.map((stepName, index) => (
                <BreadCrumbItem
                  index={index}
                  step={step}
                  label={stepName}
                  isLast={index + 1 === steps.length}
                  changeStep={changeStep}
                />
              ))}
            </Flex>
          </Flex>
          <Flex alignItems="center" alignSelf="flex-end">
            <Link color="lotusBlue.400" fontSize="sm" mr="3.5">
              Save and continue later
            </Link>
            <Button
              variant="primary"
              fontSize="sm"
              fontWeight="normal"
              px="10"
              // isDisabled={canNext} // TODO : remove comment when handleErrors is implement in Onboarding.jsx
              onClick={goNext}
            >
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

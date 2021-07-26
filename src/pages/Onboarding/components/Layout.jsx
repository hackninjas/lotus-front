import { Box, Flex, Link, Grid } from '@chakra-ui/layout';
import { Button, Image, Text } from '@chakra-ui/react';
import React from 'react';

import onboardingBg from 'assets/images/onboarding.png';
import lotusWhiteLogo from 'assets/images/lotusWhite.png';
import lotusWhiteLeaf from 'assets/images/lotusWhiteLeaf.png';
import { BreadCrumbItem } from './BreadCrumbItem';


export const Layout = ({
  children,
  step,
  canNext,
  goNext,
  changeStep,
  onSubmit,
  isLoading,
  steps,
  stepNumber
}) => { 
  return (
    <Flex h="100vh">
      <Grid
        templateColumns="1fr"
        w={{base:"100%",md:"60%"}}
        py="14"
        px={{base:"10",lg:"24"}}
        boxSizing="border-box"
      >
        <Box>{children}</Box>
        <Flex justifyContent="space-between" w="100%"  direction={{base: "column", xl: "row"}}>
          <Flex alignSelf={{xl:"flex-end"}} direction="column">
            <Text
              fontSize="sm"
              pb="2"
              fontWeight="bold"
              borderStyle="dashed"
              borderBottomWidth={2}
              mb="2"
              w="fit-content"
            >
              {step + 1} of {stepNumber}
            </Text>
            <Flex>
              {steps.map((stepName, index) => (
                <React.Fragment key={index}>
                  <BreadCrumbItem
                    index={index}
                    step={step}
                    label={stepName}
                    isLast={index + 1 === steps.length}
                    changeStep={changeStep}
                  />
                </React.Fragment>
              ))}
            </Flex>
          </Flex>
          <Flex alignItems="center" alignSelf={{xl:"flex-end"}} justifyContent="space-between">
            <Link to='/dashboard'
            color="lotusBlue.400" fontSize={{base:"xs",md:"sm"}} mr="3.5">
              Save and continue later
            </Link>
            <Button
              variant="primary"
              fontSize={{base:"xs",md:"sm"}}
              fontWeight="normal"
              px={{base:"4",lg:"10"}}
              isDisabled={canNext}
              onClick={step + 1 === steps.length ? onSubmit : goNext}
              isLoading={isLoading}
            >
              {step + 1 === steps.length ? 'submit' : 'Continue'}
            </Button>
          </Flex>
        </Flex>
      </Grid>
      <Box w="40%" position="relative" display={{base:"none",md:"block"}}>
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

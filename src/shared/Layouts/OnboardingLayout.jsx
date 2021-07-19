import { Box, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import React from 'react';

import onboardingBg from 'assets/images/onboarding.png';
import lotusWhiteLogo from 'assets/images/lotusWhite.png';
import lotusWhiteLeaf from 'assets/images/lotusWhiteLeaf.png';

export const OnboardingLayout = ({ children }) => {
  return (
    <Flex h="100vh">
      <Box flex={0.6}>{children}</Box>
      <Box flex={0.4} position="relative">
        <Image src={onboardingBg} objectFit="cover" h="100%" />
        <Box position="absolute" left="0" top="0" bottom="0" right="0">
          <Flex direction="column" justifyContent="space-between" h="100%" px="10">
            <Image src={lotusWhiteLogo} w="14" alignSelf="flex-end" mt="10" mr="14" />
            <Image src={lotusWhiteLeaf}/>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

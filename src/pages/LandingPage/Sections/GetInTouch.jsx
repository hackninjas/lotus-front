import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Input, Button, Image } from '@chakra-ui/react';

import CreditCardPic from 'assets/svg/creditCardTransparent.svg';

export const GetInTouch = () => {
  return (
    <Box px={{ base: '10', lg: '28' }} mt={{ base: '20', lg: '96' }}>
      <Flex
        px={{base:"10", lg: '14' }}
        py={{base:"10",lg:"20"}}
        borderRadius="xl"
        bg="lotusBlue.400"
        justifyContent="space-between"
        h={{lg:"96"}}
      >
        <Flex
          direction="column"
          alignItems={{ base: 'center', md: 'flex-start' }}
          flex={1}
          h="100%"
        >
          <Heading
            color="lotusGreen.400"
            fontFamily="fonts.cocogoose"
            mb="8"
            fontSize={{ lg: '3vw' }}
          >
            Got questions you <br /> need answers to?
          </Heading>
          <Input
            variant="filled"
            bg="white"
            mb="6"
            color="white"
            w="max-content"
          />

          <Button
            colorScheme="lotusBlue.400"
            variant="outline"
            color="white"
            fontWeight="light"
            fontSize="sm"
            w="max-content"
            _hover={{
              bg: 'white',
              color: 'lotusBlue.400',
              fontWeight: 'normal',
            }}
            borderWidth={1}
            px="10"
          >
            Get in touch
          </Button>
        </Flex>
        <Box
          display={{ base: 'none', md: 'block' }}
          w="30%"
          position="relative"
        >
          <Image
            src={CreditCardPic}
            w="130%"
            maxW="200%"
            position="absolute"
            top={{ base: '10', md: '-40' }}
            right="0"
          />
        </Box>
      </Flex>
    </Box>
  );
};

import { Box, Text, Center, Stack } from '@chakra-ui/layout';
import { Image,  Slider, SliderTrack, SliderFilledTrack } from '@chakra-ui/react';
import React from 'react';
import logo from '../../../assets/images/logo.png';

export const Welcome = () => {
  return (
    <Box textAlign="left">
      <Center>
        <Box w="50px" mt="8">
          <Image src={logo} objectFit="cover" w="100%" />
        </Box>
      </Center>
      <Center>
      <Stack spacing="5" mt="10">

        <Text color="#0C0C0C" fontWeight="bold" fontSize="sm">
          Hi, Davis, Welcome to Lotus bank.
        </Text>
        <Text color=" #2D2D2D" fontSize="xs">
          We are setting you up. it will take just a moment...
        </Text>
        <Slider aria-label="slider-ex-2" color="teak" defaultValue={30}mt="10">
        <SliderTrack>
            <SliderFilledTrack />
        </SliderTrack>
        </Slider>
      </Stack>
      </Center>
    </Box>
  );
};

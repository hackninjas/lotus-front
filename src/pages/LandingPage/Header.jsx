import React from 'react';
import {
    Box,
    Text,
    Flex,
    Image,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';

export const Header = () => {
    return (
        <Flex justifyContent="space-between" px="24" py="5" position="absolute" top="0" left="0" w="100%">
            <Box w="50px">
                <Image src={logo} objectFit="cover" w="100%" />
            </Box>

            <Flex>

            </Flex>

            <Text>Hello</Text>
        </Flex>
    );
};

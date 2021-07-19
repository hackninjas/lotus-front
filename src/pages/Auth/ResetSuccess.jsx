import { Box, Text, Center, Divider } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';
import correct from '../../assets/images/correct.svg'


export const ResetSuccess = () => {
  return (
    <Box w="80%">
        <Center>
            <Box w="50px">
                 <Image src={logo} objectFit="cover" w="100%"/>
            </Box>
        </Center>
        <Image src={correct} borderRadius="full" border="1px solid teal" boxSize="30px" mt={10}/>
        <Text 
            color="#0C0C0C"
            fontWeight="bold"
            fontSize="sm">
            Password reset successfully. Login to continue.
          </Text>
          <Divider 
        variant="dashed"
        fontWeight="bold"
        mt={6}
        >
        </Divider>
        <Text 
            color=" #2D2D2D"
            fontSize="sm"
            mt={6}>
                Sed a magna semper, porta purus eu, ullamcorper liguia.
                Nam sit amet consectetior sapien. Etiam duat, viveriaisklkd.
           </Text>
    </Box>
  );
};

import React from 'react';
import { Link }from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Divider,
  Text,
  FormControl, FormLabel, Input
} from '@chakra-ui/react';
import typing from '../../assets/images/typing.png';
import groupFlower from '../../assets/images/groupFlower.png';


export const Otp = () => {
    return (
        <>
        <Flex textAlign="left" fontSize="xl" position="relative">
        <Box flex={0.6} px="14" w="50%">
        <Flex py="14" pl="14">
         </Flex>
        <Text color="#0C0C0C" fontWeight="bold" fontSize="sm">
          Otp Code Verification
        </Text>
        <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>We just sent an otp to your phone number
        +2349018970430. Please input the six digits number.
      </Text>
       <form>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Your Bank Verification number (BVN)
          </FormLabel>
          <Input type="text" placeholder="BVN"/>
        </FormControl>
        </form>
        <Text mt={10} fontSize="xs">
        I Don't have my Bvn now.
        <Link to="/account">
          <Text as="u" color="lotusBlue.400" fontWeight="bold">
            Continue to open account
          </Text>
        </Link>
      </Text>
    <Divider variant="dashed" fontWeight="bold" mt={6}></Divider>

      </Box>
     {/* <bvnCommon/>      */}
       <Box flex={0.4}>
        <Flex  justifyContent="" position="relative">
            <Image 
            boxSize="sm"
            src={typing} 
            objectFit="cover" 
            w="100%" 
            h="100%"
            />
            </Flex>
             {/* <Image src={groupFlower}/>  */}
       </Box> 
     </Flex>
        </>
    )
}
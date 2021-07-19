import React from 'react';
import { Link }from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Divider,
  Text,
  FormControl, FormLabel, Input, TextArea
} from '@chakra-ui/react';
import typing from '../../assets/images/typing.png';
import groupFlower from '../../assets/images/groupFlower.png';


export const ResidentialInfo = () => {
    return (
        <>
        <Flex textAlign="left" fontSize="xl" position="relative">
        <Box flex={0.6} px="14" w="50%">
        <Flex py="14" pl="14">
         </Flex>
        <Text color="#0C0C0C" fontWeight="bold" fontSize="sm">
          Residential Information
        </Text>
        <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>Sed a magna semper, porta purus eu, ullamcorper liguia.
       Nam sit amet 
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
       <form>
         <Flex>
            <FormControl mt={8} >
            <FormLabel color="#2D2D2D" fontSize="sm">
                Country
            </FormLabel>
            <Input type="text" placeholder=""/>
            </FormControl>
            <FormControl mt={8}>
            <FormLabel color="#2D2D2D" fontSize="sm">
                State
            </FormLabel>
            <Input type="text" placeholder=""/>
            </FormControl>
            <FormControl mt={8}>
            <FormLabel color="#2D2D2D" fontSize="sm">
                City
            </FormLabel>
            <Input type="text" placeholder=""/>
            </FormControl>
        </Flex>  
        </form>
        <Text mb="8px">Your Address</Text>
        <TextArea 
        size="sm"
        />

      </Box>
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
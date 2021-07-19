import React from 'react';
import { Link }from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Divider,
  Text,
  FormControl, FormLabel, Input, Checkbox
} from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import typing from '../../assets/images/typing.png';
// import groupFlower from '../../assets/images/groupFlower.png';


export const PersonInfo = () => {
    return (
        <>
        <Flex textAlign="left" fontSize="xl" position="relative">
        <Box flex={0.6} px="14" w="50%">
        <Flex py="14" pl="14">
         </Flex>
        <Text color="#0C0C0C" fontWeight="bold" fontSize="sm">
          Personal Information
        </Text>
        <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>Please confirm that all your personal information are up to date.
      </Text>
       <form>
        <Flex>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            First name
          </FormLabel>
          <Input type="name" placeholder=""/>
        </FormControl>
        <FormControl mt={8} px={4}isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Last name
          </FormLabel>
          <Input type="name" placeholder=""/>
        </FormControl>
        </Flex>
         <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Phone number
          </FormLabel>
          <Input type="phone" placeholder=""/>
        </FormControl>
        <Flex>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            What is your Birthday?
          </FormLabel>
          <Input type="name" placeholder=""/>
        </FormControl>
        
        </Flex>
        </form>
         
        <FormControl mt={8} px={4}isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Male
          </FormLabel>
          <Input type="name" placeholder=""/>
        </FormControl>
        <FormControl mt={8} px={4}isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Female
          </FormLabel>
          <Input type="name" placeholder=""/>
        </FormControl>
 <Checkbox mt={4}>
          <Text fontSize="xs" color="#2D2D2D">
               Select to confirm your details are correct & up to date
                </Text>
           </Checkbox>

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
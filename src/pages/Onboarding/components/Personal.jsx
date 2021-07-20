import { Box, Text, Flex } from '@chakra-ui/layout';
import { FormControl, FormLabel, Input, Checkbox, InputLeftAddon, InputGroup, InputLeftElement, Image, IconButton } from '@chakra-ui/react';
import React from 'react';
import male from '../../../assets/images/male.svg';
import female from '../../../assets/images/woman.svg';

export const Personal = () => {
  return (
    <Box>
      <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
          Personal Information
        </Text>
        <Text color="#2D2D2D" textAlign="left" fontSize="sm" mt={6}>
          Please confirm that all your personal information are up to date.
        </Text>
        <form>
        <Flex>
        <FormControl mt={8} >
          <FormLabel color="#2D2D2D" fontSize="sm">
            First name
          </FormLabel>
          <Input type="name" placeholder=""/>
        </FormControl>
        <FormControl mt={8} px={4}>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Last name
          </FormLabel>
          <Input type="name" placeholder=""/>
        </FormControl>
        </Flex>
         <FormControl mt={8} >
          <FormLabel color="#2D2D2D" fontSize="sm">
            Phone number
          </FormLabel>
          <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="phone number" />
          </InputGroup>
          {/* <Input type="phone" placeholder=""/> */}
        </FormControl>
        <Flex>
        <FormControl mt={8} >
          <FormLabel color="#2D2D2D" fontSize="sm">
            What is your Birthday?
          </FormLabel>
          <Input w={0.9} type="name" placeholder=""/>
        </FormControl>
        <Flex>
        <FormControl mt={8} ml={8}>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Male
          </FormLabel>
          <IconButton
            colorScheme="none"
            aria-label="Call Segun"
            icon={ <Image src={male} color="gray.300"/>}
            border="1px solid black"
            w="20"
          />
          {/* <InputGroup>
               <InputLeftElement
                  pointerEvents="none"
                  children={<Image src={male} color="gray.300" pl={4}/>}
                />
           </InputGroup> */}
          {/* <Input w={0.9} type="name" placeholder="Male" fontSize="xs" pl={12} /> */}
        </FormControl>
        <FormControl mt={8}ml={8} >
          <FormLabel color="#2D2D2D" fontSize="sm">
            Female
          </FormLabel>
          <IconButton
            colorScheme="none"
            aria-label="Call Segun"
            icon={ <Image src={female} color="gray.300"/>}
            border="1px solid black"
            w="20"
          />
          {/* <InputGroup>
               <InputLeftElement
                  pointerEvents="none"
                  children={<Image src={female} color="gray.300" pl={4}/>}
                />
           </InputGroup> */}
          {/* <Input w={0.9} type="name" placeholder="Female" fontSize="xs" pl={12}/> */}
        </FormControl>
        </Flex>
        </Flex>
        </form>
        
        <Checkbox mt={4}>
          <Text fontSize="xs" color="#2D2D2D">
               Select to confirm your details are correct & up to date.
           </Text>
         </Checkbox>
    </Box>
  );
};

import React from 'react';
import { Button, Image } from '@chakra-ui/react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import Pic1 from 'assets/images/pexels-keira-burton-6147067.png';
import Pic2 from 'assets/images/pexels-photo-4559589 (1).png';
import Pic3 from 'assets/images/pexels-ivan-samkov-7620568@2x.png';

export const Description = () => {
  return (
    <Stack mt="28" px={{base:"10", lg:"0"}} spacing={{base:"28",lg:"96"}} pl={{lg:"40"}}>
      <Flex>
        <Flex
          bg="lotusFadedPink"
          borderRadius="lg"
          p="10"
          pr={{base:"10",lg:"40"}}
          direction={{base:"column", lg:'row'}}
          position="relative"
          _before={{
            content: '""',
            height: '14',
            width: {...{base:"1px",lg:'2px'}},
            position: 'absolute',
            right: 14,
            top: -1,
            background: 'black',
          }}
          _after={{
            content: '"01"',
            height: '14',
            width: 'max-content',
            position: 'absolute',
            right: 10,
            top: -14,
            color: 'black',
            fontSize: 'xx-large',
            fontWeight: {...{base:"normal",lg:'bold'}},
          }}
        >
          <Box
            w="40%"
            position="relative"
            mr="14"
            display={{base:"none", lg:"block"}}
            _after={{
              content: '""',
              height: 48,
              width: 48,
              border: '10px solid #00CECE',
              position: 'absolute',
              bottom: -60,
              left: -32,
              zIndex: '1',
            }}
          >
            <Image
              src={Pic1}
              maxWidth="120%"
              zIndex="2"
              position={{base:"relative",lg:"absolute"}}
              left={{base:"0",lg:"-20"}}
            />
          </Box>
          <Box w={{lg:"50%"}}>
            <Stack spacing="8">
              <Heading
                color="lotusBlue.400"
                fontSize={{base:"1.2rem",lg:"2rem"}}
                fontWeight="bold"
                fontFamily="font.cocogoose"
              >
                Get an account in just <br /> a few easy steps.
              </Heading>
              <Text fontSize="sm">
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </Text>
              <Text fontSize="sm">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy.
              </Text>
            </Stack>
            <Button variant="primary" mt="14" fontWeight="normal" px="10">
              Open a Bank Account
            </Button>
          </Box>
        </Flex>
      </Flex>


          {/* second  */}

      <Flex >
        <Flex
          bg="lotusGreen.200"
          borderRadius="lg"
          p="10"
          pr="0"
          position="relative"
          _before={{
            content: '""',
            height: {...{base:"14",lg:'2px'}},
            width: {...{base:"1px",lg:'80px'}},
            position: 'absolute',
            left: {...{base:"14",lg:-6}},
            top: {...{base:-1,lg:10}},
            background: 'black',
           
          }}
          _after={{
            content: '"02"',
            height: '14',
            width: 'max-content',
            position: 'absolute',
            left: {...{base:"10", lg:"-16"}},
            top:{...{base:"-14", lg:"4"}},
            color: 'black',
            fontSize: 'xx-large',
            fontWeight: {...{base:"normal",lg:'bold'}},
          }}
        >
          <Box w={{base:"100%", lg:"50%"}} mr="10">
            <Stack spacing="8" pt="10">
              <Heading
                color="lotusBlue.400"
                fontSize={{base:"1.2rem",lg:"2rem"}}
                fontWeight="bold"
                fontFamily="font.cocogoose"
              >
                Minimum documents <br /> required.
              </Heading>
              <Text fontSize="sm">
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </Text>
              <Text fontSize="sm">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy.
              </Text>
            </Stack>
            <Button variant="primary" mt="14" fontWeight="normal" px="10">
              Open a Bank Account
            </Button>
          </Box>

          <Box
            flex={1}
            position="relative"
            display={{base:"none", lg:"block"}}
            w="40%"
            _after={{
              content: '""',
              height: 48,
              width: 48,
              border: '10px solid #00CECE',
              position: 'absolute',
              bottom: -72,
              right: 32,
              zIndex: '1',
            }}
          >
            <Image src={Pic2} zIndex="2" position="absolute" right="-10" />
          </Box>
        </Flex>
      </Flex>

       {/* 3rd */}
      <Flex>
        <Flex
          bg="lotusFadedPink"
          borderRadius="lg"
          p="10"
          pr={{base:"10",lg:"40"}}
          direction={{base:"column", lg:'row'}}
          position="relative"
          _before={{
            content: '""',
            height: '14',
            width: {...{base:"1px",lg:'2px'}},
            position: 'absolute',
            right: 14,
            top: -1,
            background: 'black',
          }}
          _after={{
            content: '"03"',
            height: '14',
            width: 'max-content',
            position: 'absolute',
            right: 10,
            top: -14,
            color: 'black',
            fontSize: 'xx-large',
            fontWeight: {...{base:"normal",lg:'bold'}},
          }}
        >
          <Box
            display={{base:"none", lg:"block"}}
            w="40%"
            position="relative"
            mr="14"
            top=""
            _after={{
              content: '""',
              height: 48,
              width: 48,
              border: '10px solid #00CECE',
              position: 'absolute',
              top: -32,
              left: 20,
              zIndex: '1',
            }}
          >
            <Image
              src={Pic3}
              maxWidth="120%"
              zIndex="2"
              position="absolute"
              left="-20"
            />
          </Box>
          <Box w={{lg:"50%"}}>
            <Stack spacing="8">
              <Heading
                color="lotusBlue.400"
                fontSize={{base:"1.2rem",lg:"2rem"}}
                fontWeight="bold"
                fontFamily="font.cocogoose"
              >
                Start Banking.
              </Heading>
              <Text fontSize="sm">
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </Text>
              <Text fontSize="sm">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy.
              </Text>
            </Stack>
            <Button variant="primary" mt="14" fontWeight="normal" px="10">
              Open a Bank Account
            </Button>
          </Box>
        </Flex>
      </Flex>


    </Stack>
  );
};

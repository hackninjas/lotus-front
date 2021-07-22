import React from 'react';
import { Button, Image } from '@chakra-ui/react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import Pic1 from 'assets/images/pexels-keira-burton-6147067.png';
import Pic2 from 'assets/images/pexels-photo-4559589 (1).png';
import Pic3 from 'assets/images/pexels-ivan-samkov-7620568@2x.png';

export const Description = () => {
  return (
    <Stack mt="28" spacing="96" pl="40">
      <Flex px="10" >
        <Flex
          bg="lotusFadedPink"
          borderRadius="lg"
          p="10"
          pr="40"
          position="relative"
          _before={{
            content: '""',
            height: '14',
            width: '2px',
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
            fontWeight: 'bold',
          }}
        >
          <Box
            w="40%"
            position="relative"
            mr="14"
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
              position="absolute"
              left="-20"
            />
          </Box>
          <Box w="50%">
            <Stack spacing="8">
              <Heading
                color="lotusBlue.400"
                fontSize="2rem"
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
            <Button variant="primary" mt="14" fontWeight="normal">
              Open a Bank Account
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex px="10" >
        <Flex
          bg="lotusGreen.200"
          borderRadius="lg"
          p="10"
          pr="0"
          position="relative"
          _before={{
            content: '""',
            height: '2px',
            width: '80px',
            position: 'absolute',
            left: -6,
            top: 10,
            background: 'black',
           
          }}
          _after={{
            content: '"02"',
            height: '14',
            width: 'max-content',
            position: 'absolute',
            left: -16,
            top: 4,
            color: 'black',
            fontSize: 'xx-large',
            fontWeight: 'bold',
          }}
        >
          <Box w="50%" mr="10">
            <Stack spacing="8" pt="10">
              <Heading
                color="lotusBlue.400"
                fontSize="2rem"
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
            <Button variant="primary" mt="14" fontWeight="normal">
              Open a Bank Account
            </Button>
          </Box>

          <Box
            flex={1}
            position="relative"
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


      <Flex px="10" >
        <Flex
          bg="lotusFadedPink"
          borderRadius="lg"
          p="10"
          pr="40"
          position="relative"
          _before={{
            content: '""',
            height: '14',
            width: '2px',
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
            fontWeight: 'bold',
          }}
        >
          <Box
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
          <Box w="50%">
            <Stack spacing="8">
              <Heading
                color="lotusBlue.400"
                fontSize="2rem"
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
            <Button variant="primary" mt="14" fontWeight="normal">
              Open a Bank Account
            </Button>
          </Box>
        </Flex>
      </Flex>


    </Stack>
  );
};

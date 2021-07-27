import { Box, Text, Center, Divider, Flex, Stack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../../assets/images/logo.png';
import correct from '../../../assets/svg/correct.svg';
import { useHistory } from 'react-router-dom';

const VerifyPage = ({ message, setVerify, checker, redirectToHome }) => {
  let history = useHistory();

  if (redirectToHome) {
    setTimeout(() => {
      history.push('/upgrade');
    }, 3000);
  }

  if (checker) {
    setTimeout(() => {
      setVerify(false);
    }, 3000);
  }

  //   });
  return (
    <Box textAlign="left" mt={10}>
      <Center>
        <Box w="50px">
          <Image src={logo} objectFit="cover" w="100%" />
        </Box>
      </Center>
      <Center>
        <Stack spacing="5" mt="10">
          <Flex
            border="1px solid #00CECE"
            borderRadius="full"
            w="14"
            justifyContent="center"
            h="14"
            p="2"
          >
            <Image src={correct} />
          </Flex>
          <Text color="#0C0C0C" fontWeight="bold" fontSize="sm">
            {message}
          </Text>
          <Divider variant="dashed" fontWeight="bold"></Divider>
          <Text color=" #2D2D2D" fontSize="sm">
            Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
            consectetior sapien. Etiam duat, viveriaisklkd.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default VerifyPage;

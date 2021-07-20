import React, { useContext } from 'react';
import { Box, Divider, Flex, Grid, Heading, Stack } from '@chakra-ui/layout';
import { Button, chakra, Image, Text } from '@chakra-ui/react';

import dashboardBg from 'assets/images/dashboard.png';
import lotusWhiteLogo from 'assets/images/lotusWhite.png';
import { UserContext } from 'context';
import { formatNumberToCurrency } from 'utils/functions';

export const UserDashboard = ({ children }) => {
  const { userData } = useContext(UserContext);

  console.log('====================================');
  console.log('userData', userData);
  console.log('====================================');

  return (
    <Flex h="100vh">
      <Box w="35%" position="relative">
        <Image src={dashboardBg} objectFit="cover" h="100%" w="100%" />
        <Box position="absolute" left="0" top="0" bottom="0" right="0">
          <Flex direction="column" h="100%" px="10">
            <Image src={lotusWhiteLogo} w="14" mt="10" mr="14" />

            <Stack spacing="8" mt="20">
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text color="white" fontSize="sm" mb="1.5">Account Balance</Text>
                  <Heading fontFamily="fonts.body" color="white">
                    {formatNumberToCurrency(userData?.balance, 'NGN')}
                  </Heading>
                </Box>
                <Button
                colorScheme="whiteAlpha"
                fontSize="sm"
                fontWeight="normal"
                >Fund my Account</Button>
              </Flex>
              <Divider/>

              <Heading color="white" fontSize="sm">Your account ha been created.</Heading>

              <Text as="p" color="white" fontWeight="light">
              Your Lotus account number is <chakra.strong color="white">{userData.accountNumber}</chakra.strong>. Your account has a balance limit of N500,000 and a deposit limit of N50,000. Upgrade your account to enjoy maximum capacity of your account.
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <Grid
        templateColumns="1fr"
        w="65%"
        py="14"
        px="24"
        boxSizing="border-box"
      >
        <Box>{children}</Box>
      </Grid>
    </Flex>
  );
};

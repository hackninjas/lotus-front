import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { Text, Box, chakra } from '@chakra-ui/react';
import { ReactComponent as RateIcon } from 'assets/svg/rate.svg';
import { ReactComponent as TransferIcon } from 'assets/svg/transfer.svg';
import { ReactComponent as BankIcon } from 'assets/svg/bank.svg';

const FeatureItems = [
  {
    label: 'Easy Banking',
    icon: <BankIcon width="40" height="50" />,
  },
  {
    label: 'Speedy Transfers',
    icon: <TransferIcon width="40" height="50" />,
  },
  {
    label: 'Zero Interest rates',
    icon: <RateIcon width="40" height="50" />,
  },
  {
    label: 'Quick account opening',
    icon: <></>,
  },
];

export const Features = () => {
  return (
    <Flex
      mt="20"
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Heading fontSize="4vw" color="lotusBlue.400" textAlign="center">
        The Bank that covers <br /> all your needs
      </Heading>

      <Box w={{ base: '80%', lg: '50%' }} mx="auto" mt="8" mb="10" px="10">
        <Text as="p" fontSize="sm" textAlign="center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
      </Box>

      <Flex mt="16">
        {FeatureItems.map(({ icon, label }) => (
          <Flex
            fontSize="sm"
            direction="column"
            alignItems="center"
            justifyContent="center"
            mr="10"
          >
            <Flex
              p="4"
              px="5"
              bg="white"
              mb="2"
              justifyContent="center"
              boxShadow="0px 10px 50px #0000001A"
            >
              {icon}
            </Flex>
            <chakra.span>{label}</chakra.span>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

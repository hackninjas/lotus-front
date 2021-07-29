import { Box, Flex, Text } from '@chakra-ui/layout';

export const TopNav = ({ title }) => {
  return (
    <Flex
      bg="#fff"
      px="10"
      py="5"
      position="fixed"
      top="0"
      zIndex="2"
      left="16%"
      right="0"
    >
      <Text fontWeight="bold">{title}</Text>
      <Box></Box>
    </Flex>
  );
};

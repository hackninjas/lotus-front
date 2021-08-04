import { Box, Flex, Text } from '@chakra-ui/layout';
import Alert from 'assets/images/alert.svg';
import User from 'assets/images/person1.png';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const TopNav = ({ title }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      background="#FFFFFF 0% 0% no-repeat padding-box"
      boxShadow="0px 5px 30px #00000008"
      opacity="1"
      px="10"
      py="5"
      position="fixed"
      top="0"
      zIndex="2"
      left="17.5%"
      right="0"
    >
      <Text fontWeight="bold">{title}</Text>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        width="270px"
      >
        <img src={Alert} alt="Notifiationicon" width="15px" />
        <img src={User} alt="User" width="35px" />
        <Text fontSize="small">
          Chijindu Amadi <ChevronDownIcon />
        </Text>
      </Box>
    </Flex>
  );
};

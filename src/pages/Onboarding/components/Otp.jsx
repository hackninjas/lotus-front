import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { ChevronDownIcon, ArrowBackIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  PinInput,
  PinInputField,
  HStack,
  Button,
  Flex,
  chakra,
  Menu,
  MenuButton,
  Avatar,
  AvatarBadge,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
// import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { UserContext } from 'context';
import BvnContext from 'context/BvnContext/BvnContext';
import { UserDashboardLayout } from 'pages/UserDashoard/components/UserDashboardLayout';

export const Otp = () => {
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const { verifyBvn } = useContext(BvnContext);

  const handleClick = () => {
    history.push('/idverify');
    verifyBvn();
    setTimeout(() => history.push('/upgrade'), 2000);
  };

  return (
    <UserDashboardLayout>
      <Flex justifyContent="space-between" mb="50px">
        <Flex alignItems="center" fontSize="sm">
          <Flex alignItems="center" cursor="pointer" mr="4">
            <Button borderRadius="150px">
              <ArrowBackIcon size="35px" />
            </Button>
            <Text
              ml="2"
              color="lotusGrey"
              _hover={{
                color: 'black',
              }}
              fontFamily="fonts.cocogoose"
            >
              Back
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Avatar
            name={userData?.name}
            src={userData?.image}
            bg="teal.500"
            size="sm"
          >
            <AvatarBadge boxSize="0.9em" bg="lotusRed.100" />
          </Avatar>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="transparent"
              _focus={{
                outline: 'none',
              }}
            >
              <chakra.span fontSize="xs" fontWeight="normal">
                {userData?.name}
              </chakra.span>
            </MenuButton>
            <MenuList fontSize="xs" minWidth="28">
              <MenuItem>Settings</MenuItem>
              <MenuItem>Edit</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          color="#0C0C0C"
          fontWeight="bold"
          fontSize="lg"
          textTransform="uppercase"
        >
          Otp Code Verification
        </Text>
        <Text
          color="#2D2D2D"
          textAlign="center"
          fontSize="sm"
          mt={6}
          maxW="65%"
        >
          We just sent an otp to your phone number +2349018970430. Please input
          the six digits number.
        </Text>
        <form>
          <FormControl my="75px">
            <FormLabel
              color="#2D2D2D"
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
            >
              Enter OTP Code
            </FormLabel>
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </FormControl>
        </form>
      </Box>
      <Box display="flex" justifyContent="flex-end" mx="25%">
        <Button
          px="50px"
          variant="primary"
          fontSize="xs"
          style={{cursor: "pointer"}}
          onClick={handleClick}
        >
          Verify
        </Button>
      </Box>
    </UserDashboardLayout>
  );
};

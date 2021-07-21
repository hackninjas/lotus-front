import React, { useContext } from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Heading, VStack, HStack } from '@chakra-ui/layout';
import { ChevronDownIcon, ArrowBackIcon, ViewIcon, ViewOffIcon, CheckCircleIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  AvatarBadge,
  chakra,
  Input,
  InputGroup,
  InputRightElement,
  FormLabel,
} from '@chakra-ui/react';
import { UserContext } from 'context';
import { UserDashboardLayout } from './components/UserDashboardLayout';

export const BankVerificationNumber = () => {
  const { userData } = useContext(UserContext);
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <UserDashboardLayout>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" fontSize="sm">
          <Flex alignItems="center" cursor="pointer" mr="4">
              <Button
              borderRadius="150px">
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

      <Flex
        direction="column"
        justifyContent="center"
        position="relative"
        zIndex="100"
        h="100%"
        w="100%"
        top="-70"
      >
        <VStack spacing="4" mx="auto" w="50%" textAlign="center">
          <Heading
            position="relative"
            fontSize="sm"
            _before={{
              content: '" "',
              height: '1px',
              width: '60px',
              bg: 'lotusGreen.400',
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            Bank Verification Number (BVN)
          </Heading>
          <Text fontWeight="normal" fontSize="xs">
            By upgrading your account, you can enjoy maximum capacity of your Lotus bank account.
          </Text>

          <Flex alignItems="center">
            <form>
                <FormLabel fontSize="xs" fontWeight="bold" mt={10} color="#2D2D2D">
                    Your bank verification number
                </FormLabel>
            <InputGroup size="md">
                <Input
                //    w="150"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="bvn"
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <ViewIcon name="view-off "/>  : <ViewOffIcon name="view" />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            </form>
          </Flex>
          <HStack w="50%" justifyContent="start">
            <CheckCircleIcon />
            <Text fontSize="xs">Verified</Text>
        </HStack>
        </VStack>
      </Flex>
    </UserDashboardLayout>
  );
};

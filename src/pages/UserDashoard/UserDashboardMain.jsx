import React, { useContext } from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Heading, Link, VStack } from '@chakra-ui/layout';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  AvatarBadge,
  chakra,
} from '@chakra-ui/react';
import { UserContext } from 'context';
import { CreditCardIcon, DonutChartIcon, SendIcon } from 'shared/Icons';
import { UserDashboardLayout } from './components/UserDashboardLayout';

export const UserDashboardMain = () => {
  const { userData } = useContext(UserContext);
  return (
    <UserDashboardLayout>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" fontSize="sm">
          <Flex alignItems="center" cursor="pointer" mr="4">
            <SendIcon size="25px" />
            <Text
              ml="2"
              color="lotusGrey"
              _hover={{
                color: 'black',
              }}
              fontFamily="fonts.cocogoose"
            >
              Transactions
            </Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer" mr="4">
            <DonutChartIcon />
            <Text
              _hover={{
                color: 'black',
              }}
              as="p"
              ml="2"
              color="lotusGrey"
            >
              Budget
            </Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer" mr="4">
            <CreditCardIcon />
            <Text
              _hover={{
                color: 'black',
              }}
              ml="2"
              color="lotusGrey"
            >
              Card
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
            No Activities yet.
          </Heading>
          <Text fontWeight="normal" fontSize="sm">
            Upgrade your account to enjoy maximum capacity on your Lotus
            Account.
          </Text>

          <Flex alignItems="center">
            <Link fontSize="sm" mr="5">
              Skip for now
            </Link>
            <Button variant="primary" fontSize="sm">
              Upgrade my account
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </UserDashboardLayout>
  );
};

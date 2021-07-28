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
      <Flex justifyContent="space-between" alignItems="center" maxH="100vh">
        <Flex alignItems="center" fontSize="sm">
          <Flex alignItems="center" cursor="pointer" mx={{base:"10",sm:"4"}}>
            <SendIcon size="25px" />
            <Text
              ml="2"
              color="lotusGrey"
              _hover={{
                color: 'black',
              }}
              fontFamily="fonts.cocogoose"
              display={{base: "none", sm: "block"}}
            >
              Transactions
            </Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer" mr={{base:"10",sm:"4"}}>
            <DonutChartIcon />
            <Text
              _hover={{
                color: 'black',
              }}
              as="p"
              ml="2"
              color="lotusGrey"
              display={{base: "none", sm: "block"}}
            >
              Budget
            </Text>
          </Flex>
          <Flex alignItems="center" cursor="pointer" mr={{base:"10",sm:"4"}}>
            <CreditCardIcon />
            <Text
              _hover={{
                color: 'black',
              }}
              ml="2"
              color="lotusGrey"
              display={{base:"none",sm: "block"}}
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
        alignItems="center"
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

          <Flex flexDirection={{base: "column", md: "row"}} mt={{base: "40", md: "auto"}} alignItems="center">
            <Link fontSize="sm" mr="5">
              Skip for now
            </Link>
            <Link href="/upgrade">
              <Button variant="primary" fontSize="sm">
                Upgrade my account
              </Button>
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </UserDashboardLayout>
  );
};

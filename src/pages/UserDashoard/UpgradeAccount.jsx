import React, { useContext } from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Heading, Link, VStack } from '@chakra-ui/layout';
import { ChevronDownIcon, ArrowBackIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  AvatarBadge,
  chakra,
  Box,
  Image,
} from '@chakra-ui/react';
import { UserContext } from 'context';
import BvnContext from 'context/BvnContext/BvnContext';
import IdContext from 'context/IdContect/IdContext';
import { UserDashboardLayout } from './components/UserDashboardLayout';
import { AlertWrapper } from 'shared/Alert';
import AlertIcon from 'assets/svg/danger.svg';
import { NavLink } from 'react-router-dom';
import GreenCheck from '../../assets/images/check_green.png';

export const UpgradeAccount = () => {
  const { userData } = useContext(UserContext);
  const { bvn_verified } = useContext(BvnContext);
  const { id_verified } = useContext(IdContext);

  return (
    <UserDashboardLayout>
      <Flex justifyContent="space-between" alignItems="center">
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

      <Flex
        direction="column"
        justifyContent="center"
        position="relative"
        zIndex="100"
        h="100%"
        w="100%"
      >
        <VStack spacing="4" mx="auto" w="100%" textAlign="center">
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
            Upgrade account
          </Heading>
          <Text fontWeight="normal" fontSize="sm">
            By upgrading your account, you can enjoy maximum capacity of your
            Lotus bank account.
          </Text>
          <Flex justifyContent="space-between">
            <AlertWrapper variant="default">
            <Link href="/verify" textDecoration="none">
              <Flex justifyContent="space-between">
                <Box flex={1}>
                  <Text color="#0C0C0C" fontSize="xs">
                    Bank Verification Number (BVN)
                  </Text>
                  <Text color="#0C0C0C" fontSize="xs">
                    Please kindly Provide your bvn for verification
                  </Text>
                </Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderWidth={1}
                  borderColor="lotusOrange"
                  borderRadius="50%"
                  height="50px"
                  width="50px"
                  p="2"
                  ml="4"
                >
                  <Image src={AlertIcon} objectFit="100%" w="100%" />
                </Flex>
              </Flex>
              </Link>
            </AlertWrapper>
            {/* <AlertWrapper variant="default">
              <Flex justifyContent="space-between">
                <Box flex={1}>
                  <Text color="#0C0C0C" fontSize="xs">
                    Means of Identification
                  </Text>
                  <Text color="#0C0C0C" fontSize="xs">
                    Please provide a valid means of identification
                  </Text>
                </Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderWidth={1}
                  borderColor="lotusOrange"
                  borderRadius="50%"
                  height="50px"
                  width="50px"
                  p="2"
                  ml="4"
                >
                  <Image src={AlertIcon} objectFit="100%" w="100%" />
                </Flex>
              </Flex>
              <Link href="/verify" textDecoration="none">
                <Flex justifyContent="space-between">
                  <Box flex={1}>
                    <Text color="#0C0C0C" fontSize="xs">
                      Bank Verification Number (BVN)
                    </Text>
                    <Text color="#0C0C0C" fontSize="xs">
                      Please kindly Provide your bvn for verification
                    </Text>
                  </Box>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderWidth={1}
                    borderColor={bvn_verified ? 'green' : 'lotusOrange'}
                    borderRadius="50%"
                    height="50px"
                    width="50px"
                    p="2"
                    ml="4"
                  >
                    <Image
                      src={bvn_verified ? GreenCheck : AlertIcon}
                      objectFit="100%"
                      w="100%"
                    />
                  </Flex>
                </Flex>
              </Link>
            </AlertWrapper> */}
            <AlertWrapper variant="default">
              <Link href="/upload">
                <Flex justifyContent="space-between">
                  <Box flex={1}>
                    <Text color="#0C0C0C" fontSize="xs">
                      Means of Identification
                    </Text>
                    <Text color="#0C0C0C" fontSize="xs">
                      Please provide a valid means of identification
                    </Text>
                  </Box>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderWidth={1}
                    borderColor={id_verified ? 'green' : 'lotusOrange'}
                    borderRadius="50%"
                    height="50px"
                    width="50px"
                    p="2"
                    ml="4"
                  >
                    <Image
                      src={id_verified ? GreenCheck : AlertIcon}
                      objectFit="100%"
                      w="100%"
                    />
                  </Flex>
                </Flex>
              </Link>
            </AlertWrapper>
          </Flex>
          <Flex justifyContent="space-evenly">
            <AlertWrapper variant="default">
              <NavLink to="/address">
                <Flex justifyContent="space-between">
                  <Box flex={1}>
                    <Text color="#0C0C0C" fontSize="xs">
                      Proof of Address
                    </Text>
                    <Text color="#0C0C0C" fontSize="xs">
                      Please Provide a valid proof of address document
                    </Text>
                  </Box>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderWidth={1}
                    borderColor="lotusOrange"
                    borderRadius="50%"
                    height="50px"
                    width="50px"
                    p="2"
                    ml="4"
                  >
                    <Image src={AlertIcon} objectFit="100%" w="100%" />
                  </Flex>
                </Flex>
              </NavLink>
            </AlertWrapper>
            {/* <AlertWrapper variant="default">
              <NavLink to="/signature">
                <Flex justifyContent="space-between">
                  <Box flex={1}>
                    <Text color="#0C0C0C" fontSize="xs">
                      Signature
                    </Text>
                    <Text color="#0C0C0C" fontSize="xs">
                      Please kindly Provide your valid signature
                    </Text>
                  </Box>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderWidth={1}
                    borderColor="lotusOrange"
                    borderRadius="50%"
                    height="50px"
                    width="50px"
                    p="2"
                    ml="4"
                  >
                    <Image src={AlertIcon} objectFit="100%" w="100%" />
                  </Flex>
                </Flex>
              </NavLink>
              <Flex justifyContent="space-between">
                <Box flex={1}>
                  <Text color="#0C0C0C" fontSize="xs">
                    Proof of Address
                  </Text>
                  <Text color="#0C0C0C" fontSize="xs">
                    Please Provide a valid proof of address document
                  </Text>
                </Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderWidth={1}
                  borderColor="lotusOrange"
                  borderRadius="50%"
                  height="50px"
                  width="50px"
                  p="2"
                  ml="4"
                >
                  <Image src={AlertIcon} objectFit="100%" w="100%" />
                </Flex>
              </Flex>
            </AlertWrapper> */}
            <AlertWrapper variant="default">
            <NavLink to="/signature">
              <Flex justifyContent="space-between">
                <Box flex={1}>
                  <Text color="#0C0C0C" fontSize="xs">
                    Signature
                  </Text>
                  <Text color="#0C0C0C" fontSize="xs">
                    Please kindly Provide your valid signature
                  </Text>
                </Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderWidth={1}
                  borderColor="lotusOrange"
                  borderRadius="50%"
                  height="50px"
                  width="50px"
                  p="2"
                  ml="4"
                >
                  <Image src={AlertIcon} objectFit="100%" w="100%" />
                </Flex>
              </Flex>
              </NavLink>
            </AlertWrapper>
          </Flex>
        </VStack>
      </Flex>
    </UserDashboardLayout>
  );
};

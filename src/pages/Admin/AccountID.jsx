import {
  Text,
  Flex,
  Box,
  Grid,
  GridItem,
  Divider,
  Badge,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { SideNav } from './components/SideNav/SideNav';
import { TopNav } from './components/TopNav/TopNav';

import { useHistory } from 'react-router';

import { Icon } from '@chakra-ui/icon';
import { RiArrowLeftCircleLine } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

import Pexel from '../../assets/images/pexels.png';

const AccountID = () => {
  const history = useHistory();
  return (
    <Grid
      minH="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
      background="#f9f9f9"
      marginTop="20"
    >
      <GridItem colSpan={1}>
        <SideNav active="accounts" />
      </GridItem>
      <GridItem colSpan={4}>
        <TopNav title="Accounts" />
        <Box
          paddingLeft="5"
          paddingRight="10"
          paddingY="10"
          position="relative"
        >
          <Flex justifyContent="space-between">
            <Box>
              <Flex justifyContent="space-between" alignItems="center">
                <Box
                  mr="7"
                  cursor="pointer"
                  color="#2D2D2D"
                  opacity="0.5"
                  onClick={() => history.push('/admin-accounts')}
                >
                  <Icon as={RiArrowLeftCircleLine} /> Back
                </Box>
                <Divider
                  orientation="vertical"
                  h="50px"
                  border="1px #9B9B9B solid"
                  bg="#9B9B9B"
                  mr="7"
                />
                <Box>
                  <Text fontWeight="bold">Customer details</Text>
                  <Text maxW="60%" fontSize="small">
                    Donec dapibus mauris id odio ornare tempus. Duis sit amet
                    accumsan justo, quis tempor ligula.
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Button
                mr="2"
                opacity="0.5"
                colorScheme="#9B9B9B"
                variant="outline"
                fontWeight="normal"
                fontSize="smaller"
              >
                Decline
              </Button> 
              <Button
                ml="2"
                opacity="0.5"
                bg="#9B9B9B"
                color="#fff"
                fontWeight="normal"
                fontSize="smaller"
              >
                Approved
              </Button>
            </Box>
          </Flex>
          <Box p="5" border="1px solid #E8E7E7" w="65%" marginTop="50">
            <Text fontWeight="bold">Personal Information</Text>
            <Divider
              orientation="horizontal"
              border="1px #1E0B89 solid"
              bg="#1E0B89"
              w="130px"
            />
            <Text fontSize="12px" mb="5">
              Investor’s personal information
            </Text>
            <img src={Pexel} alt="Pexel" width={60} />

            <Grid
              my="5"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              fontSize="x-small"
              fontWeight="bolder"
            >
              <GridItem mt="5" colSpan={2}>
                <Text opacity="0.5">Investor Name</Text>
                <Text color="#1E0B89">(First name, Last name, Other name)</Text>
                <Text mt="2">Kelvin Nwoke</Text>
              </GridItem>
              <GridItem mt="5" colSpan={1}>
                <Text opacity="0.5">Date of Birth</Text>
                <Text mt="6">17th August,1990</Text>
              </GridItem>
              <GridItem mt="5" colSpan={1}>
                <Text opacity="0.5">Gender</Text>
                <Text mt="6">Male</Text>
              </GridItem>
              <GridItem mt="5" colSpan={1}>
                <Text opacity="0.5">Email Address</Text>
                <Text mt="6">kelvin_nwoke@gmail.com</Text>
              </GridItem>
              <GridItem mt="5" colSpan={2}>
                <Text opacity="0.5">Phone number 1</Text>
                <Text mt="4">(496)583672</Text>
              </GridItem>
              <GridItem mt="5" colSpan={1}>
                <Text opacity="0.5">Phone number 2</Text>
                <Text mt="4">--</Text>
              </GridItem>
              <GridItem mt="5" colSpan={1}>
                <Text opacity="0.5">Account type</Text>
                <Text mt="4">
                  Individual account{' '}
                  <Icon color="#3EA200" as={AiFillCheckCircle} />
                </Text>
              </GridItem>
            </Grid>
            <hr />
            <Text my="10">Residential Address</Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              fontSize="x-small"
              fontWeight="bolder"
            >
              <GridItem colSpan={2}>
                <Text opacity="0.5">Address</Text>
                <Text mt="4">23 Abiola Cooker Way, Surulere, Lagos</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">City</Text>
                <Text mt="4">Surulere</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">State</Text>
                <Text mt="4">Lagos</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Country</Text>
                <Text mt="4">Nigeria</Text>
              </GridItem>
            </Grid>
            <hr />
            <Text my="10">Place of Origin</Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              fontSize="x-small"
              fontWeight="bold"
            >
              <GridItem colSpan={2}>
                <Text opacity="0.5">State of Origin</Text>
                <Text mt="4">Delta state</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">LGA of Origin</Text>
                <Text mt="4">Asaba North</Text>
              </GridItem>
            </Grid>
            <hr />
            <Text my="10">Next of Kin</Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              fontSize="x-small"
              fontWeight="bold"
            >
              <GridItem colSpan={2}>
                <Text opacity="0.5">Investor name</Text>
                <Text color="#1E0B89">(First name, Last name, Other name)</Text>
                <Text mt="2">Ester Nwoke</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Email Address</Text>
                <Text mt="6">Ester_nwoke@gmail.com</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Relationship</Text>
                <Text mt="6" mx="2">
                  Wife
                </Text>
              </GridItem>
            </Grid>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              fontSize="x-small"
              fontWeight="bold"
            >
              <GridItem colSpan={2}>
                <Text opacity="0.5">Address</Text>
                <Text mt="4">23 Abiola Cooker Way, Surulere, Lagos</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">City</Text>
                <Text mt="4">Surulere</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">State</Text>
                <Text mt="4">Lagos</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Country</Text>
                <Text mt="4">Nigeria</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box p="5" border="1px solid #E8E7E7" w="65%" marginTop="50">
            <Text fontWeight="bold" mt="10">
              Bank Account Details
            </Text>
            <Divider
              orientation="horizontal"
              border="1px #1E0B89 solid"
              bg="#1E0B89"
              w="130px"
            />
            <Text fontSize="12px" mb="5">
              Customer's account details
            </Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="x-small"
              fontWeight="bold"
            >
              <GridItem colSpan={1}>
                <Text opacity="0.5">Account name</Text>
                <Text mt="4">Kelvin Nwoke</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Account number</Text>
                <Text mt="4">2199281973</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">BVN</Text>
                <Text mt="4">22992837291</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Account type</Text>
                <Text mt="4">Tier 3</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box p="5" border="1px solid #E8E7E7" w="65%" marginTop="50">
            <Text fontWeight="bold" mt="10">
              Account Verification & Documentation
            </Text>
            <Divider
              orientation="horizontal"
              border="1px #1E0B89 solid"
              bg="#1E0B89"
              w="130px"
            />
            <Text fontSize="12px" mb="5">
              Customer's account details
            </Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="x-small"
              fontWeight="bold"
            >
              <GridItem colSpan={1}>
                <Text opacity="0.5">Account name</Text>
                <Text mt="4">Kelvin Nwoke</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Account number</Text>
                <Text mt="4">2199281973</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">BVN</Text>
                <Text mt="4">22992837291</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text opacity="0.5">Account type</Text>
                <Text mt="4">Tier 3</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box
            border="1px solid #E8E7E7"
            w="25%"
            top="38%"
            position="fixed"
            right="10"
          >
            <Box
              borderBottom="1px solid #E8E7E7"
              paddingX="5"
              paddingY="3"
              bg="#F9F7FF"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold" fontSize="small">
                  Registration
                </Text>
                <Badge
                  paddingX="5"
                  paddingY="1"
                  fontWeight="bold"
                  color="#1C9724"
                  bg="#D3FFD6"
                  border="1px #1C9724 solid"
                  textTransform="none"
                >
                  100% Complete
                </Badge>
              </Flex>
            </Box>
            <Box paddingX="5" paddingTop="5" paddingBottom="10">
              <Flex justifyContent="space-between">
                <Box fontSize="12px">
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Full Name
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Residencial Address
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Telephone
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Email
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Date of Birth
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Gender
                  </Text>
                </Box>
                <Box fontSize="12px">
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Valid Identification
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    BVN
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Proof of Address
                  </Text>
                  <Text my="2">
                    <Icon color="#3EA200" as={AiFillCheckCircle} mr="1" />
                    Signature
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AccountID;

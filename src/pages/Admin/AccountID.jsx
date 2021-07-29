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
                  mr="10"
                  cursor="pointer"
                  onClick={() => history.push('/admin-accounts')}
                >
                  <Icon as={RiArrowLeftCircleLine} /> Back
                </Box>
                <Divider
                  orientation="vertical"
                  h="50px"
                  border="1px #9B9B9B solid"
                  bg="#9B9B9B"
                  mr="10"
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
            <Text fontSize="smaller" mb="5">
              Investor’s personal information
            </Text>
            <img src={Pexel} alt="Pexel" />

            <Grid
              my="5"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="small"
              textAlign="center"
              justifyContent="space-between"
            >
              <GridItem mt="5" fontSize="x-small" colSpan={1}>
                <Text>Investor name</Text>
                <Text fontSize="x-small" color="#1E0B89">
                  (First name, Last name, Other name)
                </Text>
                <Text mt="1">Kelvin Nwoke</Text>
              </GridItem>
              <GridItem mt="5" fontSize="x-small" colSpan={1}>
                <Text>Date of birth</Text>
                <Text mt="8">17th August,1990</Text>
              </GridItem>
              <GridItem mt="5" fontSize="x-small" colSpan={1}>
                <Text>Gender</Text>
                <Text mt="8">Male</Text>
              </GridItem>
              <GridItem mt="5" fontSize="x-small" colSpan={1}>
                <Text>Email Address</Text>
                <Text mt="8">kelvin_nwoke@gmail.com</Text>
              </GridItem>
              <GridItem mt="5" fontSize="x-small" colSpan={1}>
                <Text>Phone number 1</Text>
                <Text mt="4">(496)583672</Text>
              </GridItem>
              <GridItem mt="5" fontSize="x-small" colSpan={1}>
                <Text>Phone number 2</Text>
                <Text mt="4">--</Text>
              </GridItem>
              <GridItem mt="5" fontSize="x-small" colSpan={1}>
                <Text>Account type</Text>
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
              templateColumns="repeat(4, 1fr)"
              fontSize="small"
              textAlign="center"
              justifyContent="space-between"
            >
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Address</Text>
                <Text mt="4">23 Abiola Cooker Way, Surulere, Lagos</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>City</Text>
                <Text mt="4">Surulere</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>State</Text>
                <Text mt="4">Lagos</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Country</Text>
                <Text mt="4">Nigeria</Text>
              </GridItem>
            </Grid>
            <hr />
            <Text my="10">Place of Origin</Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="small"
              textAlign="center"
              justifyContent="space-between"
            >
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>State of Origin</Text>
                <Text mt="4">Delta state</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>LGA of Origin</Text>
                <Text mt="4">Asaba North</Text>
              </GridItem>
            </Grid>
            <hr />
            <Text my="10">Next of Kin</Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="small"
              textAlign="center"
              justifyContent="space-between"
            >
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Investor name</Text>
                <Text fontSize="x-small" color="#1E0B89">
                  (First name, Last name, Other name)
                </Text>
                <Text mt="1">Ester Nwoke</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Email Address</Text>
                <Text mt="1">Ester_nwoke@gmail.com</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Relationship</Text>
                <Text mt="1">Wife</Text>
              </GridItem>
            </Grid>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="small"
              textAlign="center"
              justifyContent="space-between"
            >
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Address</Text>
                <Text mt="4">23 Abiola Cooker Way, Surulere, Lagos</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>City</Text>
                <Text mt="4">Surulere</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>State</Text>
                <Text mt="4">Lagos</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Country</Text>
                <Text mt="4">Nigeria</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box p="5" border="1px solid #E8E7E7" w="65%" marginTop="50">
            <Text mt="10">Bank Account Details</Text>
            <Divider
              orientation="horizontal"
              border="1px #1E0B89 solid"
              bg="#1E0B89"
              w="130px"
            />
            <Text fontSize="smaller">Customer's account details</Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="small"
              textAlign="center"
              justifyContent="space-between"
            >
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Account name</Text>
                <Text mt="4">Kelvin Nwoke</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Account number</Text>
                <Text mt="4">2199281973</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>BVN</Text>
                <Text mt="4">22992837291</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Account type</Text>
                <Text mt="4">Tier 3</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box p="5" border="1px solid #E8E7E7" w="65%" marginTop="50">
            <Text fontSize="smaller" mt="10">
              Account Verification & Documentation
            </Text>
            <Divider
              orientation="horizontal"
              border="1px #1E0B89 solid"
              bg="#1E0B89"
              w="130px"
            />
            <Text fontSize="smaller">Customer's account details</Text>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              fontSize="small"
              textAlign="center"
              justifyContent="space-between"
            >
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Account name</Text>
                <Text mt="4">Kelvin Nwoke</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Account number</Text>
                <Text mt="4">2199281973</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>BVN</Text>
                <Text mt="4">22992837291</Text>
              </GridItem>
              <GridItem fontSize="x-small" colSpan={1}>
                <Text>Account type</Text>
                <Text mt="4">Tier 3</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box
            border="1px solid #E8E7E7"
            w="25%"
            top="35%"
            position="fixed"
            right="10"
          >
            <Box
              borderBottom="1px solid #E8E7E7"
              paddingX="8"
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
            <Box paddingX="8">
              <Flex justifyContent="space-between">
                <Box>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                </Box>
                <Box>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
                  </Text>
                  <Text my="2" fontSize="small">
                    <Icon color="#3EA200" as={AiFillCheckCircle} />
                    Full Name
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

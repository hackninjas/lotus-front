import { Flex, Grid } from '@chakra-ui/layout';
import { Box, GridItem, Text } from '@chakra-ui/react';
import { SideNav } from './components/SideNav/SideNav';
import { TopNav } from './components/TopNav/TopNav';

import BankIcon from '../../assets/images/bank_icon.svg';
import Lauggage from '../../assets/images/lagguage.svg';
import Card from '../../assets/images/card_icon.svg';
import User from '../../assets/images/user_icon.svg';

import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Card Request',
      backgroundColor: '#1E0B89',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [1100, 210, 1000, 900, 1010, 250, 100],
    },
  ],
};

export const AdminDashboard = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
      background="#f9f9f9"
      marginTop="20"
    >
      <GridItem colSpan={1}>
        <SideNav active="dashboard" />
      </GridItem>
      <GridItem colSpan={4}>
        <TopNav title="Dashboard" />
        <Box mx="10" mt="15">
          <Grid
            w="100%"
            h="270px"
            templateRows="repeat(2,1fr)"
            templateColumns="repeat(4,1fr)"
            color="white"
            gap={4}
          >
            <GridItem
              colSpan={1}
              background="#1E0B89"
              paddingX="5"
              paddingY="4"
              borderRadius="5"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text color="white" fontSize="small">
                    Total Account holders
                  </Text>
                  <Text color="white" fontSize="large" fontWeight="extrabold">
                    150,000
                  </Text>
                </Box>
                <img src={User} alt="User" width="35" />
              </Flex>
            </GridItem>
            <GridItem
              colSpan={1}
              background="#1E0B89"
              paddingX="5"
              paddingY="4"
              borderRadius="5"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text color="white" fontSize="small">
                    Total Account Opening
                  </Text>
                  <Text color="white" fontSize="large" fontWeight="extrabold">
                    2,200
                  </Text>
                </Box>
                <img src={BankIcon} alt="User" width="35" />
              </Flex>
            </GridItem>
            <GridItem
              colSpan={1}
              background="#1E0B89"
              paddingX="5"
              paddingY="4"
              borderRadius="5"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text color="white" fontSize="small">
                    Total Card requests
                  </Text>
                  <Text color="white" fontSize="large" fontWeight="extrabold">
                    50,000
                  </Text>
                </Box>
                <img src={Card} alt="User" width="35" />
              </Flex>
            </GridItem>
            <GridItem
              colSpan={1}
              background="#1E0B89"
              paddingX="5"
              paddingY="4"
              borderRadius="5"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Box>
                  <Text color="white" fontSize="small">
                    Total account updates
                  </Text>
                  <Text color="white" fontSize="large" fontWeight="extrabold">
                    500
                  </Text>
                </Box>
                <img src={Lauggage} alt="User" width="35" />
              </Flex>
            </GridItem>
          </Grid>
          <Box>
            <Grid
              w="100%"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={3}
            >
              <GridItem colSpan="3">
                <Box
                  background="#fff"
                  paddingX="3"
                  paddingY="5"
                  borderRadius="5"
                  border="1px solid #E8E7E7"
                >
                  <Bar
                    data={state}
                    options={{
                      title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: 'right',
                      },
                    }}
                  />
                </Box>
              </GridItem>
              <GridItem colSpan="2">
                <Box
                  background="#fff"
                  paddingX="3"
                  paddingY="5"
                  borderRadius="5"
                  border="1px solid #E8E7E7"
                >
                  <Text fontWeight="bold">Customer Locations</Text>
                  <Flex justifyContent="space-between " my="2">
                    <Text>Lagos</Text>
                    <Text>325,000</Text>
                  </Flex>
                  <Flex justifyContent="space-between " my="2">
                    <Text>Abia</Text>
                    <Text>225,000</Text>
                  </Flex>
                  <Flex justifyContent="space-between " my="2">
                    <Text>Cross River</Text>
                    <Text>125,000</Text>
                  </Flex>
                  <Flex justifyContent="space-between " my="2">
                    <Text>Ogun</Text>
                    <Text>95,000</Text>
                  </Flex>
                  <Flex justifyContent="space-between " my="2">
                    <Text>Imo</Text>
                    <Text>125,000</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>Anambra</Text>
                    <Text>125,000</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>Rivers</Text>
                    <Text>125,000</Text>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>Kogi</Text>
                    <Text>125,000</Text>
                  </Flex>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

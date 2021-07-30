import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icon';
import { Search2Icon } from '@chakra-ui/icons';
import { SideNav } from './components/SideNav/SideNav';
import { TopNav } from './components/TopNav/TopNav';

import { AiFillPrinter } from 'react-icons/ai';
import { ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons';
import AccountsTable from './components/Table/Table';

export const AdminAccountPage = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
      marginTop="20"
      background="#f9f9f9"
    >
      <GridItem colSpan={1}>
        <SideNav active="accounts" />
      </GridItem>
      <GridItem colSpan={4}>
        <TopNav title="Accounts" />
        <Box paddingLeft="5" paddingRight="10" paddingY="10">
          <Text fontWeight="bold">Account Opening</Text>
          <Text w="35%" fontSize="small">
            Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
            justo, quis tempor ligula.
          </Text>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            paddingY="10"
          >
            <InputGroup
              bg="#F4F4F4 0% 0% no-repeat padding-box"
              border="none"
              w="30%"
              borderRadius="10px"
            >
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input
                placeholder="Seach account holder"
                size="md"
                border="none"
              />
            </InputGroup>
            <Box>
              <Button
                colorScheme="#1E0B89"
                leftIcon={<Icon as={AiFillPrinter} />}
                variant="outline"
                size="sm"
                marginRight="2"
              >
                Button
              </Button>
              <Button
                colorScheme="#1E0B89"
                leftIcon={<ExternalLinkIcon />}
                rightIcon={<ChevronDownIcon />}
                variant="outline"
                size="sm"
                marginLeft="2"
              >
                Button
              </Button>
            </Box>
          </Flex>
          <AccountsTable />
        </Box>
      </GridItem>
    </Grid>
  );
};

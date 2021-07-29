import {
  Table,
  Thead,
  Tbody,
  Badge,
  Tr,
  Th,
  Td,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { useHistory } from 'react-router';

const AccountsTable = () => {
  const history = useHistory();
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th fontSize="xx-small">
            <Checkbox />
          </Th>
          <Th fontSize="xx-small">Customer Name</Th>
          <Th fontSize="xx-small">Email</Th>
          <Th fontSize="xx-small">Phone Number</Th>
          <Th fontSize="xx-small">Date of account opening</Th>
          <Th fontSize="xx-small">BVN</Th>
          <Th fontSize="xx-small">Request status</Th>
          <Th fontSize="xx-small">Actions</Th>
        </Tr>
      </Thead>
      <Box h="2" />
      <Tbody>
        <Tr
          fontSize="x-small"
          cursor="pointer"
          border="1px solid #E8E7E7"
          onClick={() => history.push('/accounts/kelvin')}
        >
          <Td>
            <Checkbox />
          </Td>
          <Td>Kelvin Nwoke</Td>
          <Td>kelvin_nwoke@gmail.com</Td>
          <Td>+2347032931497</Td>
          <Td>24/4/2021</Td>
          <Td>2233998877662</Td>
          <Td>
            <Badge colorScheme="green">Success</Badge>
          </Td>
          <Td>
            <Icon as={BsThreeDotsVertical} />
          </Td>
        </Tr>
        <Box h="2" />
        <Tr
          fontSize="x-small"
          cursor="pointer"
          border="1px solid #E8E7E7"
          onClick={() => history.push('/accounts/kelvin')}
        >
          <Td>
            <Checkbox />
          </Td>
          <Td>Kelvin Nwoke</Td>
          <Td>kelvin_nwoke@gmail.com</Td>
          <Td>+2347032931497</Td>
          <Td>24/4/2021</Td>
          <Td>2233998877662</Td>
          <Td>
            <Badge colorScheme="green">Success</Badge>
          </Td>
          <Td>
            <Icon as={BsThreeDotsVertical} />
          </Td>
        </Tr>
        <Box h="2" />
        <Tr
          fontSize="x-small"
          cursor="pointer"
          border="1px solid #E8E7E7"
          onClick={() => history.push('/accounts/kelvin')}
        >
          <Td>
            <Checkbox />
          </Td>
          <Td>Kelvin Nwoke</Td>
          <Td>kelvin_nwoke@gmail.com</Td>
          <Td>+2347032931497</Td>
          <Td>24/4/2021</Td>
          <Td>2233998877662</Td>
          <Td>
            <Badge colorScheme="green">Success</Badge>
          </Td>
          <Td>
            <Icon as={BsThreeDotsVertical} />
          </Td>
        </Tr>
        <Box h="2" />
        <Tr
          fontSize="x-small"
          cursor="pointer"
          border="1px solid #E8E7E7"
          onClick={() => history.push('/accounts/kelvin')}
        >
          <Td>
            <Checkbox />
          </Td>
          <Td>Kelvin Nwoke</Td>
          <Td>kelvin_nwoke@gmail.com</Td>
          <Td>+2347032931497</Td>
          <Td>24/4/2021</Td>
          <Td>2233998877662</Td>
          <Td>
            <Badge color="#FF8A15">Pending</Badge>
          </Td>
          <Td>
            <Icon as={BsThreeDotsVertical} />
          </Td>
        </Tr>
        <Box h="2" />
        <Tr
          fontSize="x-small"
          cursor="pointer"
          border="1px solid #E8E7E7"
          onClick={() => history.push('/accounts/kelvin')}
        >
          <Td>
            <Checkbox />
          </Td>
          <Td>Kelvin Nwoke</Td>
          <Td>kelvin_nwoke@gmail.com</Td>
          <Td>+2347032931497</Td>
          <Td>24/4/2021</Td>
          <Td>2233998877662</Td>
          <Td>
            <Badge color="#FF8A15">Pending</Badge>
          </Td>
          <Td>
            <Icon as={BsThreeDotsVertical} />
          </Td>
        </Tr>
        <Box h="2" />
        <Tr
          fontSize="x-small"
          cursor="pointer"
          marginY="5"
          border="1px solid #E8E7E7"
          onClick={() => history.push('/accounts/kelvin')}
        >
          <Td>
            <Checkbox />
          </Td>
          <Td>Kelvin Nwoke</Td>
          <Td>kelvin_nwoke@gmail.com</Td>
          <Td>+2347032931497</Td>
          <Td>24/4/2021</Td>
          <Td>2233998877662</Td>
          <Td>
            <Badge color="#FF8A15">Pending</Badge>
          </Td>
          <Td>
            <Icon as={BsThreeDotsVertical} />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default AccountsTable;

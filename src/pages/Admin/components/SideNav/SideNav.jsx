import { Divider, Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

import AdminLogo from '../../../../assets/images/admin_logo.png';

export const SideNav = props => {
  return (
    <Box
      h="100vh"
      background="#fff"
      padding="10"
      position="fixed"
      top="0"
      left="0"
    >
      <Flex flexDirection="column" alignItems="center">
        <Box>
          <img
            src={AdminLogo}
            alt="Admin Logo"
            style={{ marginBottom: '15px' }}
          />
          <Divider
            orientation="horizontal"
            w="125%"
            border="1px #F4F4F4 solid"
            bg="#F4F4F4"
            my="5"
          />
        </Box>
        <Link to="/admin-dashboard" style={{ width: '100%' }}>
          <Button
            my="7"
            width="100%"
            bg={props.active === 'dashboard' ? '#ECE5FF' : 'transparent'}
            fontSize="smaller"
            color={props.active === 'dashboard' ? '#1E0B89' : '#2D2D2D'}
            _hover={{ bg: '#ECE5FF' }}
            _active={{ bg: '#ECE5FF' }}
          >
            Dashboard
          </Button>
        </Link>
        <Link to="/admin-accounts" style={{ width: '100%' }}>
          <Button
            mb="7"
            width="100%"
            bg={props.active === 'accounts' ? '#ECE5FF' : 'transparent'}
            fontSize="smaller"
            color={props.active === 'accounts' ? '#1E0B89' : '#2D2D2D'}
            _hover={{ bg: '#ECE5FF' }}
            _active={{ bg: '#ECE5FF' }}
          >
            Accounts
          </Button>
        </Link>
        <Link to="/admin-card-request" style={{ width: '100%' }}>
          <Button
            mb="7"
            width="100%"
            bg={props.active === 'card' ? '#ECE5FF' : 'transparent'}
            fontSize="smaller"
            color={props.active === 'card' ? '#1E0B89' : '#2D2D2D'}
            _hover={{ bg: '#ECE5FF' }}
            _active={{ bg: '#ECE5FF' }}
          >
            Card Requests
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

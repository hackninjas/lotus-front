import { Divider, Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';

import AdminLogo from '../../../../assets/images/admin_logo.png';
import DashboadDark from '../../../../assets/images/dashboard_dark.svg';
import DashboadActive from '../../../../assets/images/dashboard_active.svg';
import UserActive from '../../../../assets/images/user_active.svg';
import UserDark from '../../../../assets/images/user_dark.svg';
import CreditCard from '../../../../assets/images/credit_card_dark.svg';

export const SideNav = props => {
  return (
    <Box
      h="100vh"
      padding="10"
      position="fixed"
      top="0"
      left="0"
      background="#FFFFFF 0% 0% no-repeat padding-box"
      boxShadow="0px 0px 50px #0000000D"
      opacity="1"
      zIndex="3"
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
            fontWeight="normal"
            color={props.active === 'dashboard' ? '#1E0B89' : '#2D2D2D'}
            display="flex"
            justifyContent="flex-start"
            _hover={{ bg: '#ECE5FF' }}
            _active={{ bg: '#ECE5FF' }}
            leftIcon={
              props.active === 'dashboard' ? (
                <img src={DashboadActive} alt="Dashboard icon" width="15px" />
              ) : (
                <img src={DashboadDark} alt="Dashboard icon" width="15px" />
              )
            }
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
            fontWeight="normal"
            color={props.active === 'accounts' ? '#1E0B89' : '#2D2D2D'}
            display="flex"
            justifyContent="flex-start"
            _hover={{ bg: '#ECE5FF' }}
            _active={{ bg: '#ECE5FF' }}
            leftIcon={
              props.active === 'accounts' ? (
                <img src={UserActive} alt="Accounts" width="15px" />
              ) : (
                <img src={UserDark} alt="Accounts" width="15px" />
              )
            }
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
            fontWeight="normal"
            color={props.active === 'card' ? '#1E0B89' : '#2D2D2D'}
            display="flex"
            justifyContent="flex-start"
            _hover={{ bg: '#ECE5FF' }}
            _active={{ bg: '#ECE5FF' }}
            leftIcon={
              <img src={CreditCard} alt="Credit card icon" width="15px" />
            }
          >
            Card Requests
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

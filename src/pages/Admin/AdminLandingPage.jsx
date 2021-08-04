import { Box, Grid, GridItem } from '@chakra-ui/layout';
import { Text, Divider } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import AdminBG from '../../assets/images/admin_bg.png';
import AdminLogo from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';

export const AdminLandingPage = () => {
  const history = useHistory();
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <GridItem
        rowSpan={2}
        colSpan={2}
        bg={`transparent url(${AdminBG}) 0% 0% no-repeat padding-box`}
        opacity="1"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <img
          src={AdminLogo}
          alt="Admin Logo"
          width="50px"
          style={{ margin: '10% 20%' }}
        />
      </GridItem>
      <GridItem rowSpan={2} colSpan={3} bg="#fff">
        <Box
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingX="25%"
          textAlign="left"
        >
          <Box>
            <Text fontSize="20px" fontWeight="bold" textAlign="left">
              Admin Login
            </Text>
            <Divider
              orientation="horizontal"
              width="25%"
              mb="5"
              style={{
                borderWidth: 1,
                borderColor: '#1E0B89',
                background: '#1E0B89',
              }}
            />
            <Text fontSize="small" mb="10">
              Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan
              justo, quis tempor ligula.
            </Text>
            <form>
              <Box mb="5">
                <Text fontWeight="semibold" fontSize="small" color="#2D2D2D">
                  Username
                </Text>
                <Input
                  placeholder="Enter username"
                  fontSize="small"
                  size="md"
                />
              </Box>
              <Box mb="5">
                <Text fontWeight="semibold" fontSize="small" color="#2D2D2D">
                  Password
                </Text>
                <Input
                  placeholder="Enter password"
                  fontSize="small"
                  size="md"
                />
              </Box>
              <Button
                onClick={() => history.push('/admin-dashboard')}
                // isLoading
                // loadingText="Submitting"
                w="100%"
                color="white"
                fontSize="small"
                fontWeight="medium"
                background="#1E0B89"
                variant="outline"
                _hover={{
                  bg: '#1E0B89',
                }}
                _active={{ bg: '#1E0B89' }}
              >
                Button
              </Button>
            </form>
            <Text
              color="#1E0B89"
              fontSize="small"
              fontWeight="bold"
              textDecoration="underline"
              mt="5"
              textAlign="right"
            >
              Forgot password?
            </Text>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

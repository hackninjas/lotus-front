import { Box, Heading, Text } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../api/axios';

export const ResetPassword = () => {

    const [/*loginStatus*/, setLoginStatus] = useState(false);
  const [/*toastValue*/, setToastValue] = useState('');
  const { push } = useHistory();
  const [state, setState] = useState('');
  const [checkPassword, setCheckPassword] = useState({
    password: '',
    check: true,
  });

    const [/*isLoading*/, setIsLoading] = useState(false);
  const handleCheckPassword = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setCheckPassword({ password: value, check: false });
    value !== state
      ? setCheckPassword({ password: value, check: false })
      : setCheckPassword({ password: value, check: true });
  };

  const setNewPassword = async ( event ) => {
      event.preventDefault();
      // Validate before submission
      if (typeof formError !== 'string' && checkPassword.check) {
        setIsLoading(true);
        const data = {
          password: state,
        };
        API.post(`/api/Onboarding/reset_password`, data)
          .then((_res) => {
            push('/login/success');
          })
          .catch((e) => {
            let message = e.response.data.message;
            setToastValue(message);
            setLoginStatus(true);
            setTimeout(() => {
              setLoginStatus(false);
            }, 3000);
          });
        setIsLoading(false);
      }
    };

  return (
    <Box>
      <Heading color="lotusBlue.400" textAlign="left">Reset Password</Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
          Please type in a new password and confirm the password to
          completely reset your password.
      </Text>
      <form>
        <FormControl mt={8} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">New Password</FormLabel>
              <Input 
              type="password" 
              placeholder=""
              onChange={(event) => {setState(event.currentTarget.value)}}
                 />
        </FormControl>
        <FormControl mt={8} isRequired>
              <FormLabel color="#2D2D2D" fontSize="sm">Confirm New Password</FormLabel>
              <Input 
              type="password" 
              placeholder=""
              onChange={handleCheckPassword}
               />
        </FormControl>
             <Button
          color="white"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          variant="primary"
          onClick={setNewPassword}

        >
           Continue
        </Button>
      </form>
    </Box>
  );
};

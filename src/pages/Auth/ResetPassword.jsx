import { Box, Heading, Text } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import { resetPassword } from 'api/api';
import { PasswordInput } from 'shared/PasswordInput';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToast } from 'hooks/useToast';


const password_regex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/;

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(8, 'Password too short should be atleast 8 characters long')
    .matches(
      password_regex,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    ),
});

export const ResetPassword = () => {
  const {push} = useHistory();
   const [isLoading, setIsLoading] = useState(false);
  const { toastErrorSuccess } = useToast();

  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit: async values => {
        try {
          setIsLoading(true);
          await resetPassword(values);
          
          push('/reset/success');
          toastErrorSuccess('success', 'Registration Successful');
        } catch (error) {
          toastErrorSuccess('error', error.message);
          setIsLoading(false);
        }
      },
    });


  return (
    <Box>
      <Heading color="lotusBlue.400" textAlign="left">Reset Password</Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
          Please type in a new password and confirm the password to
          completely reset your password.
      </Text>
      <form onSubmit={handleSubmit}>
         <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Password
          </FormLabel>

          <PasswordInput
              value={values.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
          />
           {errors.password && touched.password && (
              <Text fontSize="xs" color="red" mt="2">
                {errors.password}
              </Text>
            )}
        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Confirm Password
          </FormLabel>
          <Input 
          name="confirmPassword" 
          placeholder="Confirm password" 
          color="lotusBlue.400" 
          value={values.confirmPassword}
           onChange ={handleChange}
          onBlur={handleBlur}
          />
        </FormControl>
          <Button
          variant="primary"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          type="submit"
          isLoading= {isLoading}       
        >
           Continue
        </Button>
      </form>
    </Box>
  );
};

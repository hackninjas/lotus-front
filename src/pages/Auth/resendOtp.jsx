import { Box, Heading, Text } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { resendOtp } from 'api/api';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToast } from 'hooks/useToast';


const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required('Required')
    .min(11, 'Phone Number too short should be atleast 8 characters long')
});

export const Resend = () => {
  const { push } = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { toastErrorSuccess } = useToast();

  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        phone_number: '',
      },
      validationSchema,
      onSubmit: async values => {
        try {
          setIsLoading(true);
          await resendOtp(values);

          push('/verifyPhone_validateOtp');
          toastErrorSuccess('success', 'Phone verification Successful');
        } catch (error) {
          toastErrorSuccess('error', error.message);
          setIsLoading(false);
        }
      },
    });
  

  return (
    <Box>
      <Heading color="lotusBlue.400" textAlign="left">
        Verify Phone Number
      </Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
        We&apos;ve sent you a six-digit OTP confirmation code to{' '}
        your phone number. Please enter it below to
        confirm your phone number.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Phone Number
          </FormLabel>
          <Input
            name="phone_number"
            color="lotusBlue.400"
            value={values.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone_number && touched.phone_number && (
            <Text fontSize="xs" color="red" mt="2">
              {errors.phone_number}
            </Text>
          )}
        </FormControl>
        <Button
          variant="primary"
          fontSize="sm"
          fontWeight="normal"
          px="10"
          mt={8}
          w="100%"
          type="submit"
          isLoading={isLoading}
        >
          Continue
        </Button>
      </form>
    </Box>
  );
};

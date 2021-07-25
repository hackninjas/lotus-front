import { Box, Heading, Text, Center } from '@chakra-ui/layout';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToast } from 'hooks/useToast';

import {resetLink} from 'api/api';


const email_regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(3)
    .max(30)
    .required('Required')
    .matches(email_regex, 'invalid email'),
});

export const ForgotPassword = () => {
  // const { replace } = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { toastErrorSuccess } = useToast();

   const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema,
      onSubmit: async values => {
        
        try {
          setIsLoading(true);
          const email = parseInt(values.email)
          await resetLink(email);

          toastErrorSuccess('success', 'Check your email for verification');
          /// TODO: handle redirect here
        } catch (error) {
          toastErrorSuccess('error', error.message);
          setIsLoading(false);
          console.error(error.message)
        }
      },
    });

  return (
    <Box w="100%">
      <Heading color="lotusBlue.400" textAlign="center" mt={8}>
        Forgot Password
      </Heading>
      <Center>
      <Text color="#2D2D2D" textAlign="center" fontSize="xs" mt={6}>
        Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Email
          </FormLabel>
          <Input
              placeholder="Enter email"
              color="lotusBlue.400"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.email && touched.email && (
              <Text fontSize="xs" color="red" mt="2">
                {errors.email}
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
          Send Link
        </Button>
      </form>
      </Center>
    </Box>
  );
};

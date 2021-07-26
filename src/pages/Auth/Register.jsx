import { Box, Heading, Text } from '@chakra-ui/layout';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Divider,
  Flex,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { CustomDrawer } from 'shared/CustomDrawer';
import { Login } from './Login';
import { UserContext } from '../../context/user';
import { registerUser } from 'api/api';
import { PasswordInput } from 'shared/PasswordInput';
import { useToast } from 'hooks/useToast';

const password_regex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/;
const email_regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(8, 'Password too short should be atleast 8 characters long')
    .matches(
      password_regex,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    ),
  confirmPassword: Yup.string()
    .required('Required')
    .min(8, 'Password too short should be atleast 8 characters long')
    .matches(
      password_regex,
      'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    ),
  email: Yup.string()
    .email()
    .min(3)
    .max(30)
    .required('Required')
    .matches(email_regex, 'invalid email'),
});

export const Register = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const { toastErrorSuccess } = useToast();
  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit: async values => {
        try {
          setIsLoading(true);
          const user = localStorage.setItem('user', values.email);
          await registerUser(values);
          console.log(user)

          /// TODO: handle redirect here
          toastErrorSuccess('success', 'Registration Successful');
          window.location = '/onboarding';
        } catch (error) {
          toastErrorSuccess('error', error.message);
          setIsLoading(false);
        }
      },
    });

 
  return (
      <>
    <Box w="100%" pb="10">
      <Heading color="lotusBlue.400" textAlign="left">
      Register
      </Heading>
      <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
        Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            FullName
          </FormLabel>
          <Input 
          placeholder="Enter your name" 
          color="lotusBlue.400"
          name="fullName"
          values={values.fullName}
          onChange ={handleChange}
          onBlur={handleBlur}
          />
           {errors.fullName && touched.fullName && (
              <Text fontSize="xs" color="red" mt="2">
                {errors.fullName}
              </Text>
            )}
        </FormControl>
        <FormControl mt={8} isRequired>
          <FormLabel color="#2D2D2D" fontSize="sm">
            Email
          </FormLabel>
          <Input 
          placeholder="Enter email" 
          color="lotusBlue.400"
          name="email"
          values={values.email}
          onChange ={handleChange}
          onBlur={handleBlur}
          />

        </FormControl>
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
          Register
        </Button>
      </form>
      
      <Text mt={10} fontSize="xs" textAlign="center" color="#2D2D2D" fontWeight="bold">
      Already have a bank account? 
        <Link onClick={onToggle}>
          <Text as="u" color="lotusBlue.400" fontWeight="bold" ml={2}>
            Login
          </Text>
        </Link>
      </Text>
      <Divider variant="dashed" fontWeight="bold" mt={6}></Divider>
      <Text fontSize="xs" my={4} textAlign="center">
        or continue
      </Text>
      <Flex
        justifyContent="space-between"
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex
          cursor="pointer"
          _hover={{
            bg: 'lotusBlue.300',
          }}
          bg="lotusBlue.200"
          borderRadius="full"
          alignItems="center"
          p="0.5"
          pr="2.5"
          flex={0.45}
          mb={{ base: '8', sm: '0' }}
        >
          <Flex
            height="43px"
            width="43px"
            borderRadius="full"
            alignItems="center"
          >
            <FaFacebook
              style={{ fill: 'white', width: '100%', height: '100%' }}
            />
          </Flex>
          <Text color="white" fontSize="sm" ml="3">
            {' '}
            With Facebook
          </Text>
        </Flex>
        <Flex
          cursor="pointer"
          _hover={{
            bg: 'whitesmoke',
          }}
          bg="white"
          borderRadius="full"
          alignItems="center"
          p="0.5"
          pr="2.5"
          flex={0.45}
          borderWidth={1}
        >
          <Flex
            height="43px"
            width="43px"
            borderRadius="full"
            alignItems="center"
            bg="white"
            borderWidth={1}
          >
            <FcGoogle 
            style={{ width: '100%', height: '80%' }} />
          </Flex>
          <Text color="black" fontSize="sm" ml="3">
            With Google
          </Text>
        </Flex>
      </Flex>
    </Box>
    <CustomDrawer isOpen={isOpen} onClose={onToggle}>
         <Login/>
      </CustomDrawer>
    </>
  );
};


//  handle_password_change2 = e => {
//     this.setState({ password2: e.target.value }, () => {
//       if (this.state.password1 !== this.state.password2) {
//         this.setState({ error: "passwords do not match" });
//       } else if (this.state.password1 === this.state.password2) {
//         this.setState({ error: "passwords match" });
//       }
//     });
//   };
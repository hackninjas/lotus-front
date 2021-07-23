import { Box, Heading, Text } from '@chakra-ui/layout';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Divider,
  Flex,
  CircularProgress,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useHistory, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { CustomDrawer } from 'shared/CustomDrawer';
import { Account } from './Account';
import { UserContext } from '../../context/user';
import API from '../../api/axios';
import ErrorMessage from 'shared/ErrorMessage';

const password_regex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/;
const email_regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    // .min(8, 'Password too short should be atleast 8 characters long')
    // .matches(
    //   password_regex,
    //   'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
    // )
    ,
  email: Yup.string()
    .min(3)
    // .max(30)
    // .required('Required')
    // .matches(email_regex, 'invalid email'),
});

export const Login = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { setUserData } = useContext(UserContext);

  const { values, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const { replace } = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Box w="100%">
        <Heading color="lotusBlue.400" textAlign="left">
          Welcome back
        </Heading>
        <Text color="#2D2D2D" textAlign="left" fontSize="xs" mt={6}>
          Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
          consectetior sapien. Etiam duat, viveriaisklkd.
        </Text>
        <form onSubmit={() => {}}>
          {/* {error && <ErrorMessage message={error} />} */}
          <FormControl mt={8}>
            <FormLabel color="#2D2D2D" fontSize="sm">
              Email
            </FormLabel>
            <Input
              color="lotusBlue.400"
              name="email"
              value={values.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <Text fontSize="xs" color="red" mt="2">
                {errors.email}
              </Text>
            )}
          </FormControl>
          <FormControl mt={8}>
            <FormLabel color="#2D2D2D" fontSize="sm">
              Password
            </FormLabel>
            <Input
              color="lotusBlue.400"
              name="password"
              value={values.password}
              placeholder="Enter password"
              onChange={handleChange}
            />

            {errors.password && touched.password && (
              <Text fontSize="xs" color="red" mt="2">
                {errors.password}
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
            Login
          </Button>
        </form>
        <Box
          textAlign="right"
          mt="4"
          color="#2D2D2D"
          fontWeight="bold"
          fontSize="xs"
        >
          <Link to="/recover-password">Forgot Password?</Link>
        </Box>
        <Text
          mt={10}
          fontSize="xs"
          textAlign="left"
          color="#2D2D2D"
          fontWeight="bold"
        >
          Don't have a bank account with us?
          <Link onClick={onToggle}>
            <Text as="u" color="lotusBlue.400" fontWeight="bold" ml={2}>
              Open A Bank Account
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
              <FcGoogle style={{ width: '100%', height: '80%' }} />
            </Flex>
            <Text color="black" fontSize="sm" ml="3">
              With Google
            </Text>
          </Flex>
        </Flex>
      </Box>
      {/* <CustomDrawer isOpen={isOpen} onClose={onToggle}>
         <Account/>
      </CustomDrawer> */}
    </>
  );
};

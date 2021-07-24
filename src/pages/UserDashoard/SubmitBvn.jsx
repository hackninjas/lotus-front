import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { ChevronDownIcon, ArrowBackIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  AvatarBadge,
  chakra,
  InputGroup,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { UserContext } from 'context';
import { UserDashboardLayout } from './components/UserDashboardLayout';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useToast } from 'hooks/useToast';
import { bvnVerify } from 'api/api';

const validationSchema = Yup.object().shape({
  bvn: Yup.string()
    .required('Required').length(10)
    // .min(10, 'Bvn too short should be atleast 10 numbers long')
});

export const SubmitBvn = () => {
  const { push } = useHistory();
  const { userData } = useContext(UserContext);
  const { replace } = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { toastErrorSuccess } = useToast();
  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        bvn: '',
      },
      validationSchema,
      onSubmit: async values => {
        
        try {
          setIsLoading(true);
          const bvn = parseInt(values.bvn)
          await bvnVerify(bvn);

          toastErrorSuccess('success', 'bvn verification  successful');
          /// TODO: handle redirect here
          replace('/verify/success');
        } catch (error) {
          toastErrorSuccess('error', error.message);
          setIsLoading(false);
          console.error(error.message)
        }
      },
    });

  return (
    <UserDashboardLayout>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" fontSize="sm">
          <Flex alignItems="center" cursor="pointer" mr="4">
            <Button borderRadius="150px">
              <ArrowBackIcon size="35px" />
            </Button>
            <Text
              ml="2"
              color="lotusGrey"
              _hover={{
                color: 'black',
              }}
              fontFamily="fonts.cocogoose"
            >
              Back
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Avatar
            name={userData?.name}
            src={userData?.image}
            bg="teal.500"
            size="sm"
          >
            <AvatarBadge boxSize="0.9em" bg="lotusRed.100" />
          </Avatar>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="transparent"
              _focus={{
                outline: 'none',
              }}
            >
              <chakra.span fontSize="xs" fontWeight="normal">
                {userData?.name}
              </chakra.span>
            </MenuButton>
            <MenuList fontSize="xs" minWidth="28">
              <MenuItem>Settings</MenuItem>
              <MenuItem>Edit</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        position="relative"
        zIndex="100"
        h="100%"
        w="100%"
      >
        <VStack spacing="4" mx="auto" w="50%" textAlign="center">
          <Heading
            position="relative"
            fontSize="sm"
            _before={{
              content: '" "',
              height: '1px',
              width: '60px',
              bg: 'lotusGreen.400',
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            Bank Verification Number (BVN)
          </Heading>
          <Text fontWeight="normal" fontSize="xs">
            Please kindly provide your BVN for verification.
          </Text>
          <Flex alignItems="center">
            <form onSubmit={handleSubmit}>
              <FormControl mt={8} isRequired>
                <FormLabel color="#2D2D2D" fontSize="sm">
                  Your bank verification number
                </FormLabel>
                <Input
                  // name="confirmPassword"
                  name="bvn"
                  // placeholder="bvn"
                  color="lotusBlue.400"
                  value={values.bvn}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.bvn && touched.bvn && (
                  <Text fontSize="xs" color="red" mt="2">
                    {errors.bvn}
                  </Text>
                )}
              </FormControl>

              <Button
                variant="primary"
                fontSize="sm"
                fontWeight="normal"
                px="10"
                mt={8}
                w="auto"
                type="submit"
                isLoading={isLoading}
              >
                Submit for Verification
              </Button>
            </form>
          </Flex>
        </VStack>
      </Flex>
    </UserDashboardLayout>
  );
};

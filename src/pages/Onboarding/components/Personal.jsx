import { Box, Text, Flex, Stack } from '@chakra-ui/layout';
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  InputLeftAddon,
  InputGroup,
  Image,
  // IconButton,
  // Radio,
  // RadioGroup,
  // useRadio,
  useRadioGroup,
  HStack,
} from '@chakra-ui/react';
import React, {useContext} from 'react';
import { DatePicker } from '../../../shared/DatePicker';
import { FormErrorText } from 'shared/FormErrorText';
import male from '../../../assets/svg/male.svg';
import female from '../../../assets/svg/woman.svg';
import { CustomRadio } from './CustomRadio';
// import GeoLocation from 'react-geolocation-autosuggest';
import { UserContext } from 'context/user'


const gender = [
  {
    label: 'male',
    icon: <Image src={male} color="gray.300" />,
  },
  { label: 'female', icon: <Image src={female} color="gray.300" /> },
];

export const Personal = ({ formik }) => {
  const handleGender = nextValue => {
    formik.setFieldValue("gender", nextValue)
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'gender',
    defaultValue: formik.values.gender,
    onChange: handleGender,
  });

  const group = getRootProps();
  
const {state} = useContext(UserContext)

  return (
    <Box>
      {console.log(state)}
      <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
        Personal Information
      </Text>
      <Text color="#2D2D2D" textAlign="left"fontSize={{base:"xs",md:"sm"}}  mt={6}>
        Please confirm that all your personal information are up to date.
      </Text>
      <form>
        <Stack spacing="10" mt={8}> 
        <Flex>
          <FormControl>
            <FormLabel color="#2D2D2D" fontSize={{base:"xs",md:"sm"}} >
              First name
            </FormLabel>
            <Input
              type="name"
              placeholder=""
              name="firstName"
              fontSize={{base:"xs",md:"sm"}} 
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorText
              errorMessage={formik?.errors?.firstName}
              isTouched={formik?.touched?.firstName}
            />
            <FormErrorText />
          </FormControl>
          <Box w="10" />
          <FormControl >
            <FormLabel color="#2D2D2D" fontSize={{base:"xs",md:"sm"}} >
              Last name
            </FormLabel>
            <Input
              type="name"
              placeholder=""
              name="lastName"
              fontSize={{base:"xs",md:"sm"}} 
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorText
              errorMessage={formik?.errors?.lastName}
              isTouched={formik?.touched?.lastName}
            />
          </FormControl>
        </Flex>
        <Flex >  
        <FormControl>
          <FormLabel color="#2D2D2D" fontSize={{base:"xs",md:"sm"}} >
            Phone number
          </FormLabel>
          <InputGroup>
            <InputLeftAddon children="+234" fontSize={{base:"xs",md:"sm"}}  />
            <Input
              type="tel"
              placeholder="phone number"
              fontSize={{base:"xs",md:"sm"}} 
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </InputGroup>
            <FormErrorText
              errorMessage={formik?.errors?.phoneNumber}
              isTouched={formik?.touched?.phoneNumber}
            />
        </FormControl>
      
        </Flex>
        <Flex>
          <FormControl>
            <FormLabel color="#2D2D2D" fontSize={{base:"xs",md:"sm"}} >
              What is your Birthday?
            </FormLabel>
            <DatePicker name="dateOfBirth"/> 
            <FormErrorText
              errorMessage={formik?.errors?.dateOfBirth}
              isTouched={formik?.touched?.dateOfBirth}
            />
          </FormControl>
          <Flex>
            <HStack {...group}>
              {gender.map(item => {
                const radio = getRadioProps({ value: item.label });
                return (
                  <Box key={item.label}>
                    <Text textTransform="capitalize" fontSize={{base:"xs",md:"sm"}} >
                      {item.label}
                    </Text>
                    <CustomRadio
                      label={item.label}
                      {...radio}
                      icon={item.icon}
                    />
                  </Box>
                );
              })}
            </HStack>
          </Flex>
        </Flex>
        </Stack>
      </form>

      <Checkbox mt={4}>
        <Text fontSize="xs" color="#2D2D2D">
          Select to confirm your details are correct & up to date.
        </Text>
      </Checkbox>
    </Box>
  );
};

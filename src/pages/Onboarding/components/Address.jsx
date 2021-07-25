import React from 'react';
import { Box } from '@chakra-ui/layout';
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { FormErrorText } from 'shared/FormErrorText';

export const Address = ({ formik }) => {
  return (
    <Box>
      <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
        Residential Information
      </Text>
      <Text color="#2D2D2D" textAlign="left" fontSize="sm" mt={6}>
        Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>

      <form>
        <Flex justifyContent="space-between">
          <FormControl mt={8}>
            <FormLabel color="#2D2D2D">Country</FormLabel>
            <Input
              type="text"
              placeholder="Your country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorText
              errorMessage={formik?.errors.country}
              isTouched={formik?.touched?.country}
            />
          </FormControl>
          <FormControl mt={8} ml={8}>
            <FormLabel color="#2D2D2D">State</FormLabel>
            <Input
              type="text"
              placeholder="State"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorText
              errorMessage={formik?.errors.state}
              isTouched={formik?.touched?.state}
            />
          </FormControl>
          <FormControl mt={8} ml={8}>
            <FormLabel color="#2D2D2D">City</FormLabel>
            <Input
              type="text"
              placeholder="City"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorText
              errorMessage={formik?.errors.city}
              isTouched={formik?.touched?.city}
            />
          </FormControl>
        </Flex>
      </form>
      <Text mt={8}>Your Address</Text>
      <Textarea
        placeholder="Address"
        size="sm"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormErrorText
        errorMessage={formik?.errors.address}
        isTouched={formik?.touched?.address}
      />
    </Box>
  );
};

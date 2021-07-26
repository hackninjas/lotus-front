import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/layout';
import { Divider, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FormErrorText } from 'shared/FormErrorText';


export const Bvn = ({ formik }) => {

  return (
    <Box>
      <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
        Bank Verification number (BVN)
      </Text>
      <Text color="#2D2D2D" textAlign="left" fontSize={{base:"xs",md:"sm"}}  mt={6}>
        Sed a magna semper, porta purus eu, ullamcorper liguia. Nam sit amet
        consectetior sapien. Etiam duat, viveriaisklkd.
      </Text>
      <form>
        <FormControl mt={8}>
          <FormLabel color="#2D2D2D" fontSize={{base:"xs",md:"sm"}} >
            Your Bank Verification number (BVN)
          </FormLabel>
          <Input
            type="text"
            placeholder="BVN"
            name="bvn"
            value={formik.values.bvn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorText
            errorMessage={formik?.errors.bvn}
            isTouched={formik?.touched?.bvn}
          />
        </FormControl>
      </form>
      <Text mt={10} fontSize="xs" fontWeight="bold">
        I Don't have my Bvn now.
        <Link to="/onboard-bvn">
          <Text as="u" color="lotusBlue.400" fontWeight="bold">
            Continue to open account
          </Text>
        </Link>
      </Text>
      <Divider variant="dashed" fontWeight="bold" mt={6}></Divider>
    </Box>
  );
};

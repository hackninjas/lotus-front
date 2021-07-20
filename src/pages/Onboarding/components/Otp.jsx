import React from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { FormControl, FormLabel , PinInput, PinInputField, HStack} from '@chakra-ui/react';

export const Otp = () => {
    return (
        <Box>
                <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
                         Otp Code Verification
                  </Text>
                  <Text color="#2D2D2D" textAlign="left" fontSize="sm" mt={6}>
                      We just sent an otp to your phone number +2349018970430. Please input the six digits number.
                 </Text>
                 <form>
                    <FormControl mt={12}>
                        <FormLabel color="#2D2D2D" fontSize="sm" fontWeight="bold">
                            Enter OTP Code
                        </FormLabel>
                        <HStack>
                            <PinInput>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </FormControl>
                </form>
        </Box>
    )
}

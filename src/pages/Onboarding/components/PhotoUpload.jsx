/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { useDropzone } from 'react-dropzone';
import {
  Avatar,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Flex,
  VStack,
  Button,
} from '@chakra-ui/react';
import { useImageBase64 } from 'hooks/useImageBase64';
import { useToast } from 'hooks/useToast';

export const PhotoUpload = ({formik}) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const { convertToBase64 , imageUrl, isError, errorMessage, isSuccess, isLoading} = useImageBase64();
  const { toastErrorSuccess } = useToast();

  useEffect(()=> {
    if(isError && errorMessage){
      toastErrorSuccess("error", errorMessage)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[errorMessage, isError])




  useEffect(() => {
    formik.setFieldValue("passport", imageUrl)
  },[imageUrl])

  const onDrop = useCallback(async acceptedFiles => {
    const file = acceptedFiles?.[0];

    if (!file) {
      return;
    }
    convertToBase64(file)

    setMessage('File was uploaded 👍');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box>
      <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
        Upload Photo
      </Text>
      <Text color="#2D2D2D" textAlign="left" fontSize={{base:"xs",md:"sm"}}  mt={6}>
        Please, kindly upload a clear picture of yourself for image
        verification. A passport photo is most recommended for this process. You
        can change your image later.
      </Text>

      <Flex
        direction="column"
        justifyContent="center"
        position="relative"
        zIndex="100"
        h="100%"
        w="100%"
      >
        <VStack spacing="4" mx="auto" w="100%" textAlign="center">
          <Flex
            bg="#dadada"
            w={150}
            h={150}
            justify="center"
            align="center"
            p={50}
            mt={16}
            borderRadius={150}
            textAlign="center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isLoading ? (
              <Spinner />
            ) : isDragActive ? (
              <Text>Drop the files here...</Text>
            ) : (
              <Box>
                <Avatar w={150} h={150} src={imageUrl} />
              </Box>
            )}
          </Flex>
          {(isSuccess) && (
            <Alert
              status={'success'}
              w={250}
              borderRadius={5}
              m={2}
            >
              <AlertIcon />
              <AlertDescription w={200}>{message}</AlertDescription>
            </Alert>
          )}
          <Button 
          {...getRootProps()}
          bg="transparent" 
          fontSize="xs" 
          color="lotusBlue.400">
            Upload Photo
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

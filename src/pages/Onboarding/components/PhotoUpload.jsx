import React, { useCallback, useState } from 'react'
import { Box, Text } from '@chakra-ui/layout';
import { useDropzone } from 'react-dropzone'
import {Avatar,
   Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Flex,
  VStack,
  Button
} from '@chakra-ui/react'

export const PhotoUpload = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0]

    if (!file) {
      return
    }

    setIsLoading(true)
    setError(null)
    setMessage(null)

    try {
    //   await uploadFromBlobAsync({
    //     blobUrl: URL.createObjectURL(file),
    //     name: `${file.name}_${Date.now()}`,
    //   })
    } catch (e) {
      setIsLoading(false)
      setError(e.message)
      return
    }

    setIsLoading(false)
    setMessage('File was uploaded 👍')
  }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <Box>
        <Text color="#0C0C0C" fontWeight="bold" fontSize="md">
          Upload Photo
        </Text>    
         <Text color="#2D2D2D" textAlign="left" fontSize="sm" mt={6}>
         Please, kindly upload a clear picture of yourself for image verification. A passport
         photo is most recommended for this process. You can change your image later.
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
           <Box >
          <Avatar 
          w={150}
           h={150}
          />
        </Box>
        
        )}
      </Flex>
      {(error || message) && (
        <Alert
          status={error ? 'error' : 'success'}
          w={250}
          borderRadius={5}
          m={2}
        >
          <AlertIcon />
          <AlertDescription w={200}>{error || message}</AlertDescription>
        </Alert>
      )}
      <Button bg="transparent" fontSize="xs" color="lotusBlue.400">
              Upload Photo
        </Button>
      </VStack>
      </Flex>

    </Box>
  );
};

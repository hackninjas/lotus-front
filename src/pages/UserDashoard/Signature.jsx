import React, { useCallback, useState, useContext } from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Flex, Heading, VStack, Link } from '@chakra-ui/layout';
import { ChevronDownIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useDropzone } from 'react-dropzone';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  AvatarBadge,
  chakra,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Box,
} from '@chakra-ui/react';
import { UserContext } from 'context';
import { UserDashboardLayout } from './components/UserDashboardLayout';
import VerifyPage from './components/VerifyUpgrade';

export const Signature = () => {
  const { userData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [verify, setVerify] = useState(false);

  const onDrop = useCallback(async acceptedFiles => {
    const file = acceptedFiles?.[0];

    if (!file) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      //   await uploadFromBlobAsync({
      //     blobUrl: URL.createObjectURL(file),
      //     name: `${file.name}_${Date.now()}`,
      //   })
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
      return;
    }

    setIsLoading(false);
    setMessage('File was uploaded 👍');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const verifyMessage = 'Your signature have been submitted for verification';

const redirectToHome = true; 


  return (
    <Box>
      {verify === true ? (
        <Box>
          <VerifyPage message={verifyMessage} setVerify={setVerify} redirectToHome={redirectToHome}  />
        </Box>
      ) : (
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
            <VStack spacing="4" mx="auto" w="100%" textAlign="center">
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
                Signature
              </Heading>
              <Text fontWeight="normal" fontSize="sm">
                Please kindly upload your signature.
              </Text>
              <Flex
                bg="#dadada"
                w={350}
                h={250}
                justify="center"
                align="center"
                p={50}
                m={2}
                borderRadius={5}
                textAlign="center"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isLoading ? (
                  <Spinner />
                ) : isDragActive ? (
                  <Text>Drop the files here...</Text>
                ) : (
                  <Text fontSize="xs" color="#2D2D2D">
                    Drag 'n' drop photo or document here, or{' '}
                    <Link color="lotusBlue.400" fontWeight="bold">
                      Browse file
                    </Link>
                  </Text>
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
                  <AlertDescription w={200}>
                    {error || message}
                  </AlertDescription>
                </Alert>
              )}

              <Flex mt={8}>
                <Button
                  variant=""
                  fontSize="xs"
                  mt={5}
                  onClick={() => setVerify(true)}
                >
                  Submit for Verification
                </Button>
              </Flex>
            </VStack>
          </Flex>
        </UserDashboardLayout>
      )}
    </Box>
  );
};

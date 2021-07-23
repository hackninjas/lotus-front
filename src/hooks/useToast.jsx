import { useToast as useToastChakra } from '@chakra-ui/react';


export const useToast = () => {
  const alert = useToastChakra();

  // status can be either : success / error
  const toastErrorSuccess = (status, message) => {
    if (status === 'success') {
      return alert({
        title: 'Success',
        description: message,
        status: status,
        duration: 5000,
        isClosable: true,
        position:"top"
      });
    }

    return alert({
      title: 'Failure',
      description: message,
      status: 'error',
      duration: 5000,
      isClosable: true,
      position:"top"
    });
  };
  return { toastErrorSuccess };
};

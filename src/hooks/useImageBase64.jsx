import { useState } from 'react';

export const useImageBase64 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const convertToBase64 = async file => {

    const MAXSIZE = 1;
    if (file) {
      let img = file;

      if (img.size / 1000000 >= MAXSIZE) {
        setIsError(true);
        setErrorMessage(`File size too large, select an image lesser than ${MAXSIZE}MB`);
      } else {
        setIsLoading(true);
        let reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = async e => {
          const formData = e.target?.result;
          setImageUrl(formData);
          setIsSuccess(true)
        };

    }
    setIsError(false);
    setIsLoading(false);
    }
  };
  return {
    convertToBase64,
    isLoading,
    imageUrl,
    errorMessage,
    successMessage,
    isError,
    isSuccess,
    setIsError,
  };
};

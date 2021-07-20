export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      bg: 'lotusBlue.400',
      color: 'white',
      _hover: {
        bg: 'transparent',
        color: 'lotusBlue.400',
        _disabled: {
          bg: 'lotusBlue.400',
          color: 'white',
        },
      },
      border: '1px',
    },
    primaryOutline: {
      bg: 'transparent',
      color: 'lotusBlue.400',
      _hover: {
        bg: 'lotusBlue.400',
        color: 'white',
      },
      border: '1px',
      _disabled: {
        _hover: {
          bg: 'transparent',
          color: 'lotusBlue.400',
        },
      },
    },
  },
  defaultProps: {},
};

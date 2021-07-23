import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';

export const BreadCrumbItem = ({ index, step, label, isLast, changeStep }) => {
  const [isVisited, setIsVisited] = useState(false);

  useEffect(() => {
    if(index === step ){
        setIsVisited(true)
    }
  },[index, step])

  return (
    <Flex
      key={index}
      ml={index > 0 ? '2' : '0'}
      opacity={index === step || isVisited ? '1' : '0.5'}
      onClick={() => isVisited && changeStep(index)}
      cursor="pointer"
    >
      <Text
        pb="1"
        fontSize="xs"
        mr="1"
        borderBottomWidth={2}
        fontWeight={step === index ? 'bold' : 'normal'}
        borderColor={step === index ? 'lotusGreen.400' : 'transparent'}
      >
        {label}
      </Text>
      <TriangleUpIcon
        boxSize={2}
        mt="1.5"
        style={{ transform: 'rotate(90deg)' }}
        display={isLast ? 'none' : 'block'}
      />
    </Flex>
  );
};

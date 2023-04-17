import { Box, Text } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const CovidMessage = () => {
  return (
    <Box
      bg={'blue.400'}
      padding={2}
      borderTopLeftRadius={6}
      borderTopRightRadius={6}
    >
      <Text fontSize="lg" color={'white'}>
        Travel only if necessary
      </Text>
      <Text color={'white'} marginBottom={5}>
        Help flatten the curve if you must travel, please exercise caution for
        your safety abd safety of our community
      </Text>
      <Text color={'white'} fontSize={16}>
        Learn more <AntDesign name="arrowright" size={13} color="white" />
      </Text>
    </Box>
  );
};

export default CovidMessage;

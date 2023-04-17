import React from 'react';
import { Box, Text } from 'native-base';

const HomeMap = () => {
  return (
    <Box bg={'blue.500'} height={300} justifyContent={'center'}>
      <Text style={{ textAlign: 'center', color: 'white' }}>
        This is a dummy map
      </Text>
    </Box>
  );
};

export default HomeMap;

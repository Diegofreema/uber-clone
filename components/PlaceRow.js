import React from 'react';
import { Box, HStack, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';
const PlaceRow = ({ data }) => {
  return (
    <HStack alignItems={'center'} marginBottom={5}>
      <Box marginRight={2} bg={'#a2a2a2'} borderRadius={10}>
        {data.description === 'Home' ? (
          <Entypo
            name="home"
            size={20}
            color={'white'}
            style={{ backgroundColor: 'blue', borderRadius: 10, padding: 2 }}
          />
        ) : (
          <Entypo name="location-pin" size={20} color={'white'} />
        )}
      </Box>
      <Text fontSize={15}>{data.description || data.vicinity}</Text>
    </HStack>
  );
};

export default PlaceRow;

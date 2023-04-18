import { Box, Pressable, Text, View } from 'native-base';
import React from 'react';
import RouteMap from '../components/RouteMap';
import UberTypes from '../components/UberTypes';
import { types } from '../assets/data/types';

const Result = () => {
  const confirmUber = () => {};
  return (
    <Box flex={1}>
      <RouteMap />

      {types.map((type) => (
        <UberTypes data={type} key={type.id} />
      ))}
      <Pressable bg={'black'} margin={5} onPress={confirmUber}>
        <Text
          color={'white'}
          textAlign={'center'}
          fontWeight={'bold'}
          fontSize={17}
          padding={2}
        >
          Confirm Uber
        </Text>
      </Pressable>
    </Box>
  );
};

export default Result;

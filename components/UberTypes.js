import React from 'react';
import { HStack, Text, VStack } from 'native-base';
import { Image } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const UberTypes = ({ data }) => {
  const { type, price, duration } = data;
  const getImage = () => {
    if (type === 'UberX') {
      return require('../assets/UberX.jpeg');
    } else if (type === 'Comfort') {
      return require('../assets/Comfort.jpeg');
    } else if (type === 'UberXL') {
      return require('../assets/UberXL.jpeg');
    }
  };
  return (
    <HStack
      justifyContent={'space-between'}
      alignItems={'center'}
      padding={3}
      bg={'white'}
      marginBottom={3}
    >
      <HStack alignItems={'center'}>
        <Image
          source={getImage()}
          style={{ width: 70, height: 70, marginRight: 10 }}
          resizeMode="contain"
        />
        <VStack>
          <Text fontSize={16} fontWeight={'600'}>
            {type}{' '}
            <Ionicons
              name="person"
              size={15}
              color="black"
              style={{ marginLeft: 8 }}
            />
            3
          </Text>
          <Text fontSize={16}>8:30pm dropOff</Text>
        </VStack>
      </HStack>
      <VStack alignItems={'flex-end'}>
        <Text fontWeight={'600'}>
          <Entypo name="price-tag" size={24} color="green" />
          est. ${price}
        </Text>
        <Text>$20-25</Text>
      </VStack>
    </HStack>
  );
};

export default UberTypes;

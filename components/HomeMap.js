import React from 'react';
import { Box, Pressable, Text, View } from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Image } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import { cars } from '../assets/data/cars';

const HomeMap = () => {
  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../assets/top-UberX.png');
    } else if (type === 'Comfort') {
      return require('../assets/top-Comfort.png');
    } else if (type === 'UberXL') {
      return require('../assets/top-UberXL.png');
    }
  };
  return (
    <Box flex={1}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {cars?.map((car) => (
          <Marker
            coordinate={{ latitude: car.latitude, longitude: car.longitude }}
            key={car.id}
          >
            <Image
              style={{ width: 70, height: 70, resizeMode: 'contain' }}
              source={getImage(car.type)}
            />
          </Marker>
        ))}
      </MapView>
    </Box>
  );
};

export default HomeMap;

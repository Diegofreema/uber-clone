import { View, Text } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { cars } from '../assets/data/cars';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Box } from 'native-base';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDgloXC7zvEP8zfmEF1gKpeuofd1Db3-NE';
const RouteMap = () => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
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
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="hotpink"
        />
        <Marker coordinate={origin} title={'origin'} />
        <Marker coordinate={destination} title={'destination'} />
      </MapView>
    </Box>
  );
};

export default RouteMap;

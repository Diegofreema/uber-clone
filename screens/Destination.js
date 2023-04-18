import React, { useEffect, useState } from 'react';
import { Box, Text, View } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from '../components/PlaceRow';
import {} from 'react-native';

const Destination = ({ navigation }) => {
  const [originPlaces, setOriginPlaces] = useState('');
  const [destinationPlaces, setDestinationPlaces] = useState('');
  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  const navigateToResult = () => {
    if (originPlaces && destinationPlaces) {
      navigation.navigate('Result', { originPlaces, destinationPlaces });
    }
  };

  useEffect(() => {
    navigateToResult();
  }, [originPlaces, destinationPlaces]);
  return (
    <Box safeArea="5" safeAreaTop="20" height={'100%'} bg={'white'}>
      <GooglePlacesAutocomplete
        placeholder="Where from"
        currentLocation={true}
        currentLocationLabel="Current Location"
        onPress={(data, details = null) => {
          setOriginPlaces(data, details);
        }}
        query={{
          key: 'AIzaSyDgloXC7zvEP8zfmEF1gKpeuofd1Db3-NE',
          language: 'en',
        }}
        suppressDefaultStyles
        fetchDetails
        styles={{
          container: {
            position: 'absolute',
            top: 50,
            left: 0,

            right: 10,
          },
          textInput: {
            backgroundColor: '#ccc',
            padding: 10,
            marginLeft: 10,
          },
          listView: {
            position: 'absolute',
            top: 120,
            marginLeft: 10,
          },
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        renderDescription={(data) => data.description || data.vicinity}
        enablePoweredByContainer={false}
        predefinedPlaces={[homePlace, workPlace]}
      />
      <GooglePlacesAutocomplete
        placeholder="Where from"
        onPress={(data, details = null) => {
          setDestinationPlaces(data, details);
        }}
        query={{
          key: 'AIzaSyDgloXC7zvEP8zfmEF1gKpeuofd1Db3-NE',
          language: 'en',
        }}
        suppressDefaultStyles
        fetchDetails
        styles={{
          container: {
            position: 'absolute',
            top: 110,
            left: 0,
            right: 10,
          },
          listView: {
            position: 'absolute',
            top: 55,
            marginLeft: 10,
          },
          separator: {
            backgroundColor: '#efefef',
            height: 1,
          },
          textInput: {
            backgroundColor: '#ccc',
            padding: 10,
            marginLeft: 10,
          },
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        enablePoweredByContainer={false}
      />
    </Box>
  );
};

export default Destination;

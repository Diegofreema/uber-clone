import React from 'react';
import { Box, Text } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Destination = () => {
  return (
    <Box safeArea="5" safeAreaTop="10">
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDgloXC7zvEP8zfmEF1gKpeuofd1Db3-NE',
          language: 'en',
        }}
      />
    </Box>
  );
};

export default Destination;

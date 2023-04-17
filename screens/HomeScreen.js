import { View, Platform, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, CheckIcon, HStack, VStack, Text } from 'native-base';
import CovidMessage from '../components/CovidMessage';
import HomeSearch from '../components/HomeSearch';
import HomeMap from '../components/HomeMap';

const HomeScreen = () => {
  return (
    <Box>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </Box>
  );
};

export default HomeScreen;

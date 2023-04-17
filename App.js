import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import Main from './Main';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

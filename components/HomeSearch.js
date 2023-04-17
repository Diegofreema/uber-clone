import {} from 'react-native';
import React from 'react';
import {
  ArrowDownIcon,
  Box,
  CircleIcon,
  CloseIcon,
  HStack,
  Input,
  Text,
  Divider,
  Pressable,
} from 'native-base';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <Box margin={2}>
      <Pressable onPress={() => navigation.navigate('Destination')}>
        <HStack
          bg={'gray.300'}
          justifyContent={'space-between'}
          alignItems={'center'}
          padding={2}
        >
          <Text color={'black'} fontSize={16}>
            Where to?
          </Text>
          <HStack
            bg={'gray.300'}
            padding={2}
            borderRadius={20}
            className="space-x-2"
          >
            <AntDesign
              name="clockcircle"
              size={20}
              color="black"
              style={{
                marginRight: 5,
              }}
            />
            <Text>Now</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </HStack>
        </HStack>
      </Pressable>
      <HStack marginTop={5} alignItems={'center'}>
        <AntDesign
          name="clockcircle"
          size={15}
          color="white"
          style={{
            marginRight: 8,
            backgroundColor: '#ccc',
            borderRadius: 25,
            padding: 5,
          }}
        />
        <Text fontWeight={'600'}>Spin Nightclub</Text>
      </HStack>
      <Divider
        my="4"
        _light={{
          bg: 'muted.800',
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
      <Pressable>
        <HStack marginTop={5} alignItems={'center'}>
          <AntDesign
            name="home"
            size={15}
            color="white"
            style={{
              marginRight: 8,
              backgroundColor: 'blue',
              borderRadius: 25,
              padding: 5,
            }}
          />
          <Text fontWeight={'600'}>Home</Text>
        </HStack>
      </Pressable>
      <Divider
        my="5"
        _light={{
          bg: 'muted.800',
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
    </Box>
  );
};

export default HomeSearch;

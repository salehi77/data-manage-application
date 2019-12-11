import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Text, View, Button } from 'react-native';

import HomeScreen from './components/Screens/Home';
import ClinicMenuScreen from './components/Screens/ClinicMenu';
import AlgorithmScreen from './components/Screens/Algorithm';
import DescriptionScreen from './components/Screens/Description';
import SearchScreen from './components/Screens/Search';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ClinicMenu: ClinicMenuScreen,
  Algorithm: AlgorithmScreen,
  Description: DescriptionScreen,
});

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const TabNavigator = createAppContainer(
  createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
  }),
);

export default TabNavigator;

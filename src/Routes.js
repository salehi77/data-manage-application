import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './components/Home';
import ClinicScreen from './components/Clinic';
import ClinicMenuScreen from './components/ClinicMenu';
import AlgorithmScreen from './components/Algorithm';
import DescriptionScreen from './components/Description';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Clinic: ClinicScreen,
    ClinicMenu: ClinicMenuScreen,
    Algorithm: AlgorithmScreen,
    Description: DescriptionScreen,
  },
  {
    initialRouteName: 'Clinic',
    defaultNavigationOptions: {
      headerTintColor: '#005',
      headerStyle: {
        backgroundColor: '#689',
      },
      headerLeft: null,
      headerRight: null,
    },
  },
);

export default HomeStack;

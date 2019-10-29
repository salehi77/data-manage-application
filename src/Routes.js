import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './components/Home';
import ClinicScreen from './components/Clinic';
import ClinicMenuScreen from './components/ClinicMenu';
import AlgorithmScreen from './components/Algorithm';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Clinic: ClinicScreen,
    ClinicMenu: ClinicMenuScreen,
    Algorithm: AlgorithmScreen,
  },
  {initialRouteName: 'Clinic'},
);

export default HomeStack;

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './components/Home';
import ClinicScreen from './components/Clinic';
import ClinicMenuScreen from './components/ClinicMenu';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Clinic: ClinicScreen,
    ClinicMenu: ClinicMenuScreen,
  },
  {initialRouteName: 'Home'},
);

export default HomeStack;

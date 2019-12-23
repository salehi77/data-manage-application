import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import { Text, View, Button } from 'react-native';

import HomeScreen from './components/Screens/HomeScreen';
import ClinicMenuScreen from './components/Screens/ClinicMenuScreen';
import AlgorithmScreen from './components/Screens/AlgorithmScreen';
import DescriptionScreen from './components/Screens/DescriptionScreen';

import SearchScreen from './components/Screens/SearchScreen';


import SettingScreen from './components/Screens/SettingScreen'

import DrawerElement from './components/elements/DrawerElement'

import CustomScreen from './components/Screens/Custom'





const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ClinicMenu: ClinicMenuScreen,
  Algorithm: AlgorithmScreen,
  Description: DescriptionScreen,
  Setting: SettingScreen,
  Search: SearchScreen,
  Custom: CustomScreen
}, {
  initialRouteName: 'Home'
});


// const SettingStack = createStackNavigator({
//   Setting: SettingScreen
// }, {
//   initialRouteName: 'Setting'
// });


// const DrawerNavigate = createDrawerNavigator({
//   Home: {
//     screen: HomeStack,
//     navigationOptions: {
//       title: 'خانه'
//     },
//   },
//   Setting: {
//     screen: SettingStack,
//     navigationOptions: {
//       title: 'تنظیمات'
//     },
//   },
// },
//   {
//     initialRouteName: 'Home',
//     contentComponent: DrawerElement
//   }
// )




// const SearchStack = createStackNavigator(
//   {
//     Search: SearchScreen,
//   },
//   {
//     initialRouteName: 'Search'
//   }
// );



// const nnn = createStackNavigator({
//   Home: HomeStack,
//   Search: SearchStack,
//   Setting: SettingStack,
// },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       header: null
//     }
//   }
// )


// const TabNavigator = createBottomTabNavigator({
//   Home: DrawerNavigate,
//   Search: SearchStack,
// })


export default createAppContainer(HomeStack);

import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { Text, View, Button } from 'react-native'

import HomeScreen from './components/Screens/HomeScreen'
import ClinicMenuScreen from './components/Screens/ClinicMenuScreen'
import AlgorithmScreen from './components/Screens/AlgorithmScreen'
import DescriptionScreen from './components/Screens/DescriptionScreen'

import SearchScreen from './components/Screens/SearchScreen'
import AboutScreen from './components/Screens/AboutScreen'
import ToolsScreen from './components/Screens/ToolsScreen'


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
})


// const SettingStack = createStackNavigator({
//   Setting: SettingScreen
// }, {
//   initialRouteName: 'Setting'
// })

const ToolsStack = createStackNavigator({
  Tools: ToolsScreen
})


const DrawerNavigate = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'خانه'
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'درباره ما'
    },
  },
  Tools: {
    screen: ToolsStack,
    navigationOptions: {
      title: 'ابزار'
    },
  },
},
  {
    initialRouteName: 'Home',
    contentComponent: DrawerElement
  }
)




// const SearchStack = createStackNavigator(
//   {
//     Search: SearchScreen,
//   },
//   {
//     initialRouteName: 'Search'
//   }
// )



// const TabNavigator = createBottomTabNavigator({
//   Home: DrawerNavigate,
//   Search: SearchStack,
// })


export default DrawerNavigate

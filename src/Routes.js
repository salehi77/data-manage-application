import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './components/Screens/Home';
import ClinicScreen from './components/Screens/Clinic';
import ClinicMenuScreen from './components/Screens/ClinicMenu';
import AlgorithmScreen from './components/Screens/Algorithm';
import DescriptionScreen from './components/Screens/Description';

const HomeStack = createStackNavigator(
  // const HomeStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Clinic: ClinicScreen,
    ClinicMenu: ClinicMenuScreen,
    Algorithm: AlgorithmScreen,
    Description: DescriptionScreen,
  },
  {
    initialRouteName: 'Clinic',
    // defaultNavigationOptions: {
    //   headerTintColor: '#fff',
    //   headerStyle: {
    //     backgroundColor: '#689',
    //   },
    // },
  },
);

export default HomeStack;

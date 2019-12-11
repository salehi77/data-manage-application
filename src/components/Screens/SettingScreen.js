import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base'
import HeaderElement from '../elements/HeaderElement'

const SettingScreen = (props) => {


  return (
    <>
      <Text>setting</Text>
    </>
  )
}

SettingScreen.navigationOptions = ({ navigation }) => {

  return {
    header: <HeaderElement navigation={navigation} />,
    // title: 'home',
  };
};

export default SettingScreen
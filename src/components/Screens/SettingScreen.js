import React from 'react'
import { Text, View } from 'react-native'
import SettingHeaderElement from '../elements/Headers/SettingHeaderElement'

const SettingScreen = (props) => {


  return (
    <>
      <Text>setting</Text>
    </>
  )
}



SettingScreen.navigationOptions = ({ navigation }) => {

  return {
    header: <SettingHeaderElement navigation={navigation} />,
    // title: 'home',
  };
};

export default SettingScreen
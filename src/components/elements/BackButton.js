import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const BackButton = props => {
  return (
    <View
      style={{
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'teal',
        marginBottom: 10,
        paddingVertical: 10,
        paddingStart: 15,
      }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.pop()
        }}>
        <Icon name='arrow-alt-circle-right' size={40} color='teal' />
      </TouchableOpacity>
    </View>
  )
}

export default BackButton

import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Header } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const SettingHeaderElement = props => {

  return (
    <View style={{ height: 60 }}>


      <Header
        containerStyle={{
          height: '100%',
          paddingBottom: 25,
          backgroundColor: props.theme.PRIMARY_COLOR
        }}

      >

        <View
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >


          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.dispatch({ type: 'Navigation/BACK' })
            }}
          >

            <FontAwesome5Icon name='arrow-right' size={30} color='white' />

          </TouchableWithoutFeedback>

        </View>




        <Text
          style={{
            fontFamily: props.theme.PRIMARY_FONT_FAMILY,
            fontSize: props.theme.FONT_SIZE_LARGE,
            color: 'white'
          }}
        >تنظیمات</Text>

        <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center' }}>

        </View>

      </Header>



    </View>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SettingHeaderElement)

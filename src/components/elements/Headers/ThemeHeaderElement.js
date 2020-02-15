import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Header } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const ThemeHeaderElement = props => {

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
              props.navigation.goBack()
            }}
          >

            <FontAwesome5Icon name='arrow-right' size={30} color={props.theme.SECONDARY_COLOR} />

          </TouchableWithoutFeedback>

        </View>




        <Text
          style={{
            fontFamily: props.theme.PRIMARY_FONT_FAMILY,
            fontSize: props.theme.FONT_SIZE_LARGE,
            color: props.theme.SECONDARY_COLOR
          }}
        >انتخاب رنگ</Text>

        <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center' }}>
          <Text></Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeHeaderElement)

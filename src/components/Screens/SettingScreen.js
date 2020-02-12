import React from 'react'
import { connect } from 'react-redux'
import { Animated, Text, View, ActivityIndicator, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import SettingHeaderElement from '../elements/Headers/SettingHeaderElement'
import AsyncStorage from '@react-native-community/async-storage'
import { TopText, SelectAlgo } from './AlgorithmScreen'
import { changeMainFont } from '../../actions/themeAction'
import Slider from '../elements/SliderElement'



const SettingScreen = (props) => {

  const [fontSize, setFontSize] = React.useState(16)

  React.useEffect(() => {
    if (props.theme && props.theme.MAIN_FONT_SIZE) {
      setFontSize(props.theme.MAIN_FONT_SIZE)
    }
    else {
      setFontSize(16)
    }
  }, [])



  return (



    <>





      <ScrollView
        style={{
          flex: 1,
          backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>


        <View>

          <View
            style={{
              marginHorizontal: 35,
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                fontSize: 16
              }}
            >تغییر اندازه فونت</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10
            }}
          >

            <View
              style={{
                flexBasis: 20,
                flexGrow: 2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text >
                {props.theme.MAIN_FONT_SIZE}
              </Text>

            </View>

            <View
              style={{
                flexGrow: 10,
                flexDirection: 'column',
                marginEnd: 15
              }}
            >
              <Slider
                minimumValue={12}
                maximumValue={32}
                minimumTrackTintColor='#b3b3b3'
                maximumTrackTintColor='#3498db'
                step={1}
                thumbTintColor='#3498db'
                value={props.theme.MAIN_FONT_SIZE}
                onValueChange={value => {
                  setFontSize(value)
                  props.changeMainFont(value)
                }}
              />

            </View>

          </View>

          <View
            style={{
              height: 200,
              width: '100%',
              borderWidth: 1,
              borderColor: '#b5b5b5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              overflow: 'hidden',
              // backgroundColor: '#d9d9d9',
            }}
          >

            <ScrollView style={{ width: '100%' }}>

              <TopText {...props} text='بعد از عمل؟' compact />


              <SelectAlgo
                {...props}
                childs={[{ text: 'بلافاصله بعد از عمل' }, { text: 'با فاصله بعد از عمل' }]}
                initSelect={1}
                disabled
              />

            </ScrollView>

          </View>

        </View>




        <Divider style={{ marginTop: 20, height: 1 }} />




        <View>

          <View
            style={{
              marginHorizontal: 35,
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                fontSize: 16
              }}
            >تغییر پس‌زمینه</Text>
          </View>


        </View>





      </ScrollView>



    </>

  )

}

SettingScreen.navigationOptions = ({ navigation }) => {
  return {
    header: <SettingHeaderElement navigation={navigation} />,
    // title: 'home',
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = {
  changeMainFont
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)

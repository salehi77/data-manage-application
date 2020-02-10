import React from 'react'
import { connect } from 'react-redux'
import { Animated, Text, View, ActivityIndicator, ScrollView } from 'react-native'
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


        <View style={{ alignItems: 'center' }}>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
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
                {fontSize}
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
                value={fontSize}
                onValueChange={value => {
                  setFontSize(value)
                }}
                onSlidingComplete={(value) => {
                  props.changeMainFont(value)
                }}
              />

            </View>

          </View>

          <View
            style={{
              height: 200,
              borderWidth: 1,
              borderColor: '#3b3b3b',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >

            <ScrollView>

              <TopText {...props} text='بعد از عمل؟' compact />


              <SelectAlgo
                {...props}
                childs={[{ name: 'بلافاصله بعد از عمل' }, { name: 'با فاصله بعد از عمل' }]}
                initSelect={1}
                disabled
              />

            </ScrollView>

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

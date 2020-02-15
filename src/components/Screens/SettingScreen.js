import React from 'react'
import { connect } from 'react-redux'
import { Animated, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Switch } from 'react-native'
import { Divider } from 'react-native-elements'
import { SectionGrid, FlatGrid } from 'react-native-super-grid'
import SettingHeaderElement from '../elements/Headers/SettingHeaderElement'
import { TopText, SelectAlgo } from './AlgorithmScreen'
import { changeMainFont, changePrimaryColor, changeThemeBackground } from '../../actions/themeAction'
import Slider from '../elements/SliderElement'
import { colorOptions } from '../../reducers/theme'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'



let basicColors = Object.entries(colorOptions).map(color => {
  return { name: color[0], value: color[1].PRIMARY_COLOR }
})

let colors = []
basicColors.map(primary => {
  let t = basicColors.map(secondary => {
    if (primary !== secondary) return { primary, secondary }
  })
  colors = [...colors, ...t]
})
colors = colors.filter(color => color)




const SettingScreen = (props) => {

  const [fontSize, setFontSize] = React.useState(16)

  React.useEffect(() => {
    if (props.theme && props.theme.MAIN_FONT_SIZE) {
      setFontSize(props.theme.MAIN_FONT_SIZE)
    }
    else {
      setFontSize(16)
    }
    // props.navigation.navigate('Theme')
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
                maximumTrackTintColor={props.theme.PRIMARY_COLOR}
                step={1}
                thumbTintColor={props.theme.PRIMARY_COLOR}
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
              borderColor: props.theme.PRIMARY_COLOR_LIGHT,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR_LIGHT,
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



        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            marginTop: 20
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                fontSize: 18,
              }}
            >حالت شب</Text>
          </View>
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 10
            }}
          >
            <Switch
              thumbColor={props.theme.PRIMARY_COLOR}
              trackColor={props.theme.PRIMARY_COLOR}
              value={props.theme.current.mode === 'dark'}
              onValueChange={(e) => {
                props.changeThemeBackground(e ? 'dark' : 'light')
              }}
            />
          </View>
        </View>



        <Divider style={{ marginVertical: 20, height: 1 }} />




        <View>



          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              paddingLeft: 20,
              paddingRight: 30,
              backgroundColor: props.theme.SECONDARY_COLOR
            }}
            onPress={() => {
              props.navigation.navigate('Theme')
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                fontSize: 18,
              }}
            >تغییر رنگ</Text>
            <View
              style={{
                marginLeft: 'auto'
              }}
            >
              <FontAwesome5Icon name='arrow-left' color='white' size={28} />
            </View>
          </TouchableOpacity>



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
  changeMainFont,
  changePrimaryColor,
  changeThemeBackground
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)

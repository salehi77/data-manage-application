import React from 'react'
import { connect } from 'react-redux'
import { Animated, Text, View, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import ThemeHeaderElement from '../elements/Headers/ThemeHeaderElement'
import { changeMainFont, changePrimaryColor } from '../../actions/themeAction'
import { colorOptions } from '../../reducers/theme'



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




const ThemeScreen = (props) => {





  return (



    <>





      <ScrollView
        style={{
          flex: 1,
          backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>





        <View>







          <View>


            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly'
              }}
            >

              {
                colors.map((color, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        margin: 5,
                        padding: 2,
                        borderColor: 'black',
                        borderRadius: 100,
                        borderWidth: (props.theme.current.color === color.primary.name &&
                          props.theme.current.colorSec === color.secondary.name) ? 2 : 0,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          height: 50,
                          width: 50,
                          borderTopWidth: 25,
                          borderTopColor: color.primary.value,
                          borderBottomWidth: 25,
                          borderBottomColor: color.secondary.value,
                          borderRadius: 25,
                        }}
                        onPress={() => {
                          props.changePrimaryColor({ primary: color.primary.name, secondary: color.secondary.name })
                        }}
                      ></TouchableOpacity>
                    </View>
                  )
                })
              }

            </View>

          </View>




        </View>





      </ScrollView>



    </>

  )

}







ThemeScreen.navigationOptions = ({ navigation }) => {
  return {
    header: <ThemeHeaderElement navigation={navigation} />,
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
  changePrimaryColor
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen)

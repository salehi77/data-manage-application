import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing } from 'react-native'
import { Header } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'




const HomeHeaderElement = props => {

  const [rotate] = React.useState(new Animated.Value(0))

  React.useEffect(() => {
    keepAnimation()
  }, [])


  const keepAnimation = () => {
    Animated.timing(
      rotate,
      {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
      }
    ).start(() => {
      rotate.setValue(0)
      keepAnimation()
    })
  }



  return (
    <View style={{ height: 60 }}>


      <Header
        containerStyle={{
          height: '100%',
          paddingBottom: 25,
          backgroundColor: props.theme.PRIMARY_COLOR
        }}

      >

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.toggleDrawer()
            }}
          >
            <View
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            >

              <FontAwesome5Icon name='bars' size={30} color='white' />

              <Text

                style={{
                  fontFamily: props.theme.PRIMARY_FONT_FAMILY_BOLD,
                  fontSize: props.theme.FONT_SIZE_EXTRA_LARGE,
                  marginStart: 10,
                  marginTop: 10,
                  color: 'white'
                }}
              >
                کلینیک
            </Text>

            </View>


          </TouchableWithoutFeedback>

        </View>

        <Text></Text>

        <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center' }}>

          <View>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Setting')
              }}
            >
              <Animated.View
                style={{
                  transform: [{
                    rotate: rotate.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg']
                    }),
                  }]
                }}
              >
                <FontAwesome5Icon name='cog' color='white' size={30} />
              </Animated.View>

            </TouchableOpacity>


          </View>

          <View style={{ marginEnd: 25 }}>

            <TouchableOpacity>
              <FontAwesome5Icon name='search' color='white' size={25} />
            </TouchableOpacity>

          </View>


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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderElement)

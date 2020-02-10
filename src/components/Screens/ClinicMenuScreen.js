import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Animated, Easing, } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { ListItem } from 'react-native-elements'


















const ClinicMenuScreen = (props) => {





  const [myanim] = React.useState(new Animated.Value(0))
  const [clinicData, setclinicData] = React.useState(null)




  React.useEffect(() => {

    keepAnimation()

    let clinicID = props.navigation.state.params.clinicID

    props.sqlite.transaction(tx => {

      props.sqlite && props.sqlite.transaction((tx) => {

        try {
          tx.executeSql('SELECT * FROM clinics WHERE id = ?', [clinicID], (tx, result) => {


            if (result.rows.length >= 1) {
              setclinicData(result.rows.item(0))

            }

          })
        }
        catch (exp) { }

      })
    })


  }, [])


  const keepAnimation = () => {
    Animated.sequence(
      [
        Animated.timing(
          myanim,
          {
            toValue: 1,
            duration: 300,
            delay: 2000
          }
        ),
        Animated.timing(
          myanim,
          {
            toValue: 2,
            duration: 300,
            delay: 2000
          }
        ),
        Animated.timing(
          myanim,
          {
            toValue: 3,
            duration: 300,
            delay: 2000
          }
        ),
      ]
    ).start(() => {
      myanim.setValue(0)
      keepAnimation()
    })
  }



  return (

    <ScrollView
      style={{
        flex: 1,
        backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
      }}
    >




      <View
        style={{
          height: 250,
          backgroundColor: props.theme.PRIMARY_COLOR_BOLD,
          justifyContent: 'space-evenly',
        }}
      >

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'orange',
            position: 'relative',
          }}
        >



          <View
            style={{
              // alignSelf: 'center'
              position: 'absolute',
              left: 20,
              top: -10
            }}
          >

            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack()
              }}
            >

              <FontAwesome5Icon name='home' size={30} color='white' solid />

            </TouchableOpacity>

          </View>


          <View>

            <Text
              style={{
                fontSize: 32,
                color: 'white'
              }}
            >
              {/* {props.navigation.state.params.clinicName} */}
              {clinicData && clinicData.clinicName}
            </Text>

          </View>


        </View>




        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >




          <View>

            <View
              style={{
                width: 120,
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >

              <Animated.View
                style={{
                  width: myanim.interpolate({
                    inputRange: [0, 0.05, 0.1, 1, 1.05, 1.1, 2, 2.05, 2.1, 3],
                    outputRange: ['90%', '100%', '90%', '90%', '100%', '90%', '90%', '100%', '90%', '90%']
                  }),
                  height: myanim.interpolate({
                    inputRange: [0, 0.05, 0.1, 1, 1.05, 1.1, 2, 2.05, 2.1, 3],
                    outputRange: ['90%', '100%', '90%', '90%', '100%', '90%', '90%', '100%', '90%', '90%']
                  }),
                }}
              >


                <TouchableOpacity
                  style={{
                    borderRadius: 55,
                    width: '100%',
                    height: '100%',
                    backgroundColor: props.theme.SECONDARY_COLOR,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}

                  onPress={() => {

                    try {
                      const d = JSON.parse(clinicData.diagram)
                      props.navigation.navigate('Algorithm', {
                        diagram: d
                      })
                    }
                    catch (e) { }

                  }}
                >




                  <Animated.View
                    style={{
                      opacity: myanim.interpolate({
                        inputRange: [0, 1, 2, 3],
                        outputRange: [1, 0, 0, 1]
                      }),
                      position: 'absolute',
                      transform: [
                        {
                          rotate: myanim.interpolate({
                            inputRange: [0, 1, 2, 3],
                            outputRange: ['0deg', '180deg', '180deg', '360deg']
                          })
                        }
                      ]
                    }}
                  >
                    <FontAwesome5Icon
                      name={'heart'} size={60} color='white'
                    />
                  </Animated.View>


                  <Animated.View
                    style={{
                      position: 'absolute',
                      opacity: myanim.interpolate({
                        inputRange: [0, 1, 2, 3],
                        outputRange: [0, 1, 0, 0]
                      }),
                      transform: [
                        {
                          rotate: myanim.interpolate({
                            inputRange: [0, 1, 2, 3],
                            outputRange: ['180deg', '360deg', '540deg', '180deg'],
                          })
                        }
                      ]
                    }}
                  >
                    <FontAwesome5Icon
                      name={'project-diagram'} size={50} color='white'
                    />
                  </Animated.View>

                  <Animated.View
                    style={{
                      opacity: myanim.interpolate({
                        inputRange: [0, 1, 2, 3],
                        outputRange: [0, 0, 1, 0]
                      }),
                      position: 'absolute',
                      transform: [
                        {
                          rotate: myanim.interpolate({
                            inputRange: [0, 1, 2, 3],
                            outputRange: ['180deg', '180deg', '360deg', '540deg'],
                          })
                        }
                      ]
                    }}
                  >
                    <FontAwesome5Icon
                      name={'arrow-left'} size={60} color='white'
                    />
                  </Animated.View>




                </TouchableOpacity>


              </Animated.View>
            </View>


          </View>


        </View>








      </View>


      {/* <View
        style={{
          height: 60,
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          width: '15%',
          scaleX: 7,
          backgroundColor: props.theme.PRIMARY_COLOR_BOLD,
          alignSelf: 'center',
        }}
      /> */}




      <View
        style={{ position: 'relative' }}
      >



        <View style={{
          borderBottomWidth: 1,
          borderColor: '#0004',
        }}
        >





          <ListItem
            Component={TouchableOpacity}
            title={<Text style={{ fontFamily: 'XMYekan', fontSize: 18 }}>توضیحات</Text>}
            leftIcon={<FontAwesome5Icon name='clipboard' size={40} color='#484848' />}
            subtitle={<Text style={{ alignSelf: 'flex-start', color: 'grey', fontSize: 12 }}>توضیحات کلی درباره Something</Text>}
            containerStyle={{
            }}
          />





        </View>

      </View>




    </ScrollView>

  )

}




ClinicMenuScreen.navigationOptions = () => ({ header: null })







const styles = StyleSheet.create({
  algorithmButton: {
    width: '50%',
    height: 120,
    alignSelf: 'center',
    marginTop: '10%',
    alignItems: 'center',
    paddingTop: 30,
    borderRadius: 10,
    borderWidth: 2,
  },
  diagramButton: {
    backgroundColor: '#2196F3',
    width: '67%',
    alignSelf: 'flex-start',
    marginTop: 40,
    paddingVertical: 10,
    paddingStart: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderColor: '#2196E3',
    borderWidth: 2,
  },
  descriptionButton: {
    backgroundColor: '#2196F3',
    width: '67%',
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingVertical: 10,
    paddingStart: 10,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    borderColor: '#2196e3',
    borderWidth: 2,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
})

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ClinicMenuScreen)

import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import { connect } from 'react-redux';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { ListItem } from 'react-native-elements'


// class ClinicMenuScreen extends Component {

//   state = {
//     data: null,
//   };

//   componentDidMount() {
//     const { sqlite } = this.props;

//     // let clinicID = this.props.navigation.getParam('clinicID');
//     let clinicID = 1;

//     sqlite.transaction(tx => {
//       tx.executeSql(`SELECT * FROM clinic WHERE ID = ${clinicID}`)
//         .then(res => {
//           // this.props.navigation.navigate('Algorithm', {
//           //   tree: JSON.parse(res[1].rows.item(0).algorithm),
//           //   pathToThis: [],
//           // });
//           this.setState({
//             data: { ...res[1].rows.item(0) },
//           });
//         })
//         .catch(error => {
//           console.error('err');
//         });
//     });
//   }
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
//         }}>

//         {this.state.data ? (
//             <TouchableOpacity
//               onPress={() => {
//                 this.props.navigation.navigate('Algorithm', {
//                   tree: JSON.parse(this.state.data.algorithm),
//                   pathToThis: [],
//                 });
//               }}>
//             </TouchableOpacity>
//         ) : (
//             <Text>isloading...</Text>
//           )}
//       </View>
//     );
//   }
// }





const ClinicMenuScreen = (props) => {





  const [nnn] = React.useState(new Animated.Value(0))
  const [clinicData, setClinicData] = React.useState(null)




  React.useEffect(() => {

    keepAnimation()

    let clinicID = props.navigation.state.params.clinicID

    props.sqlite.transaction(tx => {

      props.sqlite && props.sqlite.transaction((tx) => {

        try {
          tx.executeSql('SELECT * FROM clinics WHERE id = ?', [2], (tx, result) => {


            if (result.rows.length >= 1) {

              // setClinicData(result.rows.item(0))

              props.navigation.navigate('Algorithm', {
                diagram: JSON.parse(result.rows.item(0).diagramParsed)
              })
            }

          });
        }
        catch (exp) { }

      });
    });


  }, [])

  const keepAnimation = () => {
    Animated.sequence(
      [
        Animated.timing(
          nnn,
          {
            toValue: 1,
            duration: 300,
            delay: 2000
          }
        ),
        Animated.timing(
          nnn,
          {
            toValue: 2,
            duration: 300,
            delay: 2000
          }
        ),
        Animated.timing(
          nnn,
          {
            toValue: 3,
            duration: 300,
            delay: 2000
          }
        ),
      ]
    ).start((a, b) => {
      // console.log(a, b)
      nnn.setValue(0)
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
          height: 280,
          backgroundColor: props.theme.PRIMARY_COLOR_BOLD,
          justifyContent: 'space-evenly',
          alignItems: 'center',
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
              {props.navigation.state.params.clinicName}
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
                  width: nnn.interpolate({
                    inputRange: [0, 0.05, 0.1, 1, 1.05, 1.1, 2, 2.05, 2.1, 3],
                    outputRange: ['90%', '100%', '90%', '90%', '100%', '90%', '90%', '100%', '90%', '90%']
                  }),
                  height: nnn.interpolate({
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
                    if (clinicData) {
                      props.navigation.navigate('Algorithm', {
                        diagram: JSON.parse(clinicData.diagramParsed)
                      })
                    }
                  }}
                >




                  <Animated.View
                    style={{
                      opacity: nnn.interpolate({
                        inputRange: [0, 1, 2, 3],
                        outputRange: [1, 0, 0, 1]
                      }),
                      position: 'absolute',
                      transform: [
                        {
                          rotate: nnn.interpolate({
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
                      opacity: nnn.interpolate({
                        inputRange: [0, 1, 2, 3],
                        outputRange: [0, 1, 0, 0]
                      }),
                      transform: [
                        {
                          rotate: nnn.interpolate({
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
                      opacity: nnn.interpolate({
                        inputRange: [0, 1, 2, 3],
                        outputRange: [0, 0, 1, 0]
                      }),
                      position: 'absolute',
                      transform: [
                        {
                          rotate: nnn.interpolate({
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




      <View>


        <View style={{ borderBottomWidth: 1, borderColor: '#0004' }}>





          <ListItem
            Component={TouchableOpacity}
            title={<Text style={{ fontFamily: 'XMYekan', fontSize: 18 }}>توضیحات</Text>}
            leftIcon={<FontAwesome5Icon name='clipboard' size={40} color='#484848' />}
            subtitle={<Text style={{ alignSelf: 'flex-start', color: 'grey', fontSize: 12 }}>توضیحات کلی درباره Something</Text>}
            containerStyle={{
              // borderBottomWidth: 1
            }}
          />




        </View>

      </View>


    </ScrollView>
  );

}




ClinicMenuScreen.navigationOptions = () => {
  return {
    header: null
  }
}







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
  }
});

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClinicMenuScreen);

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'





// class AlgorithmScreen extends Component {
//   render() {
//     let pathToThis = this.props.navigation.getParam('pathToThis');
//     let tree = this.props.navigation.getParam('tree');

//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
//         }}>
//         <ScrollView>
//           {tree.options.length === 0 ? (
//             <>
//               <View
//                 style={{
//                   borderBottomWidth: 1,
//                   borderBottomColor: 'black',
//                   paddingBottom: 20,
//                 }}>
//                 <Text
//                   style={{
//                     paddingTop: 10,
//                     paddingBottom: 5,
//                     paddingHorizontal: 15,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginVertical: 8,
//                     marginHorizontal: 16,
//                     color: 'black',
//                     alignSelf: 'flex-start',
//                     fontSize: this.props.theme.ALGORITHM_FONT_SIZE,
//                     fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                   }}>
//                   نتیجه نهایی:
//                 </Text>
//                 <Text
//                   style={{
//                     fontSize: this.props.theme.ALGORITHM_FONT_SIZE,
//                     fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                     backgroundColor: '#27ae60',
//                     width: '75%',
//                     alignSelf: 'center',
//                     alignItems: 'center',
//                     paddingVertical: 30,
//                     paddingHorizontal: 15,
//                     borderRadius: 10,
//                   }}>
//                   {tree.Text}
//                 </Text>
//               </View>
//               <View style={{ marginHorizontal: 5 }}>
//                 <Text
//                   style={{
//                     marginTop: 10,
//                     marginHorizontal: 15,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginHorizontal: 16,
//                     fontSize: this.props.theme.ALGORITHM_FONT_SIZE,
//                     fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                     color: 'black',
//                     alignSelf: 'flex-start',
//                   }}>
//                   مراحل:
//                 </Text>
//                 {pathToThis.map((option, index) => {
//                   return (
//                     <View key={index}>
//                       <Text
//                         style={{
//                           backgroundColor: '#0055aa',
//                           color: 'white',
//                           marginVertical: 10,
//                           paddingHorizontal: 20,
//                           paddingVertical: 10,
//                           alignSelf: 'center',
//                           textAlign: 'justify',
//                           fontSize: this.props.theme.ALGORITHM_FONT_SIZE,
//                           fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                         }}>
//                         {option}
//                       </Text>
//                       {pathToThis.length !== index + 1 && (
//                         <Icon
//                           name="arrow-down"
//                           size={20}
//                           style={{ alignSelf: 'center' }}
//                         />
//                       )}
//                     </View>
//                   );
//                 })}
//               </View>
//             </>
//           ) : (
//               <>
//                 <Text
//                   style={{
//                     fontSize: this.props.theme.ALGORITHM_FONT_SIZE,
//                     fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                     borderColor: '#27ae60',
//                     paddingTop: 10,
//                     paddingBottom: 5,
//                     paddingHorizontal: 15,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginVertical: 8,
//                     marginHorizontal: 16,
//                     color: 'black',
//                     borderWidth: 2,
//                     borderRadius: 25,
//                     alignSelf: 'flex-start',
//                   }}>
//                   {tree.Text}
//                 </Text>

//                 {tree.options.map(option => {
//                   return (
//                     <TouchableOpacity
//                       key={option.ID}
//                       style={{
//                         backgroundColor: '#2196F3',
//                         paddingHorizontal: 20,
//                         paddingVertical: 10,
//                         marginVertical: 8,
//                         marginHorizontal: 16,
//                         borderRadius: 10,
//                         flex: 1,
//                         flexDirection: 'row',
//                       }}
//                       onPress={() => {
//                         let pathToThis = [
//                           ...this.props.navigation.getParam('pathToThis'),
//                         ];
//                         pathToThis.push(option.Text);
//                         this.props.navigation.push('Algorithm', {
//                           tree: option,
//                           pathToThis,
//                         });
//                       }}>
//                       <Text
//                         style={{
//                           flexGrow: 1,
//                           fontSize: this.props.theme.ALGORITHM_FONT_SIZE,
//                           fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                           color: 'white',
//                           maxWidth: '90%',
//                         }}>
//                         {option.Text}
//                       </Text>
//                       <Icon
//                         style={{ flexGrow: 1 }}
//                         name="arrow-left"
//                         size={25}
//                         color="#ededed"
//                       />
//                     </TouchableOpacity>
//                   );
//                 })}
//               </>
//             )}
//         </ScrollView>
//       </View>
//     );
//   }
// }








const AlgorithmScreen = (props) => {

  const [options, setOptions] = React.useState([])
  const [selected, setSelected] = React.useState(null)


  let diagram = props.navigation.getParam('diagram', { ID: 0, name: 'nan', childs: [] })


  React.useEffect(() => {
    let o = diagram.childs.map(child => {
      return { name: child.name, selected: false }
    })
    setOptions(o)
  }, [])



  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
      }}
    >


      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 15,
          alignItems: 'center'
        }}
      >

        <View
          style={{
            marginLeft: 15
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 8,
              paddingVertical: 5,
            }}
            onPress={() => {
              props.navigation.goBack()
            }}
          >
            <FontAwesome5Icon name='arrow-right' size={25} color='#3e3e3e' />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginLeft: 'auto'
          }}
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: 'orange',
              padding: 5,
              borderRadius: 50,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10
            }}
          >
            <Text
              style={{
                fontSize: 18
              }}
            >3</Text>
          </View>
        </View>


      </View>


      <View
        style={{
          alignItems: 'center',
        }}
      >
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            paddingVertical: 50,
            maxWidth: '60%',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontFamily: props.theme.PRIMARY_FONT_FAMILY,
              fontSize: props.theme.MAIN_FONT_SIZE + 6,
            }}
          >{diagram.name}</Text>
        </View>
      </View>




      <View
        style={{
          paddingVertical: 10,
        }}
      >


        {
          options.map((option, index) => {


            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {

                    setSelected(index)

                    let oo = options.map((o, i) => {
                      if (index === i) {
                        return { ...o, selected: true }
                      }
                      else {
                        return { ...o, selected: false }
                      }
                    })

                    setOptions(oo)

                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#a1a1a1',
                      marginLeft: 10,
                      marginVertical: 5,
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      width: '90%',
                    }}
                  >

                    <Text
                      style={{
                        maxWidth: '85%',
                        color: 'white',
                        fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                        fontSize: props.theme.MAIN_FONT_SIZE,
                      }}
                    >{option.name}</Text>

                    <View
                      style={{
                        marginLeft: 'auto',
                      }}
                    >

                      <View
                        style={{
                        }}
                      >
                        {
                          option.selected
                            ?
                            <FontAwesome5Icon name='check-square' solid size={20} color='#36a5ad' />
                            :
                            <FontAwesome5Icon name='square' light size={20} color='#36a5ad' />
                        }
                      </View>
                    </View>

                  </View>
                </TouchableOpacity>

              </View>
            )

          })
        }



      </View>





      <View
        style={{
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (selected !== null && options[selected] && diagram.childs[selected]) {
              props.navigation.push('Algorithm', {
                diagram: diagram.childs[selected]
              })
            }
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#32a885',
              marginLeft: 10,
              marginVertical: 5,
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: '90%',
            }}
          >

            <Text
              style={{
                maxWidth: '85%',
                color: 'white',
                fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                fontSize: props.theme.MAIN_FONT_SIZE,
              }}
            >بعدی</Text>


          </View>
        </TouchableOpacity>

      </View>








    </ScrollView>
  )
}





AlgorithmScreen.navigationOptions = () => {
  return {
    header: null
  }
}











const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmScreen);

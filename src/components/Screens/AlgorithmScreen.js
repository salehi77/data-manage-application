import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';





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


  console.log((props.navigation.state.params.diagram))


  return (
    <Text>algo</Text>
  )
}












const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmScreen);

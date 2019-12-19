import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';


// class ClinicMenuScreen extends Component {
//   static navigationOptions = ({ navigation, navigationOptions }) => {
//     const { params } = navigation.state;
//     return {
//       title: params ? params.clinicName : '',
//     };
//   };

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
//           <View style={{}}>
//             <TouchableOpacity
//               style={[
//                 styles.algorithmButton,
//                 {
//                   backgroundColor: this.props.theme.PRIMARY_COLOR,
//                   borderColor: this.props.theme.PRIMARY_COLOR_BOLD,
//                 },
//               ]}
//               onPress={() => {
//                 this.props.navigation.navigate('Algorithm', {
//                   tree: JSON.parse(this.state.data.algorithm),
//                   pathToThis: [],
//                 });
//               }}>
//               <Text
//                 style={{
//                   fontSize: this.props.theme.FONT_SIZE_MASSIVE,
//                   fontFamily: this.props.theme.PRIMARY_FONT_FAMILY_BOLD,
//                   color: this.props.theme.PRIMARY_FOREGROUND_COLOR,
//                 }}>
//                 ورود
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.diagramButton}>
//               <Text
//                 style={{
//                   fontSize: this.props.theme.FONT_SIZE_MEDIUM,
//                   fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                   color: 'white',
//                 }}>
//                 مشاهده روال کلی
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.descriptionButton}
//               onPress={() => {
//                 this.props.navigation.navigate('Description', {
//                   description: this.state.data.description,
//                 });
//               }}>
//               <Text
//                 style={{
//                   fontSize: this.props.theme.FONT_SIZE_MEDIUM,
//                   fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
//                   color: 'white',
//                 }}>
//                 توضیحات
//               </Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//             <Text>isloading...</Text>
//           )}
//       </View>
//     );
//   }
// }








const ClinicMenuScreen = (props) => {
  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;
  //   return {
  //     title: params ? params.clinicName : '',
  //   };
  // };

  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const { sqlite } = props;
    // let clinicID = this.props.navigation.getParam('clinicID');
    let clinicID = 1;
    sqlite.transaction(tx => {
      tx.executeSql(`SELECT * FROM clinic WHERE ID = ${clinicID}`)
        .then(res => {
          // this.props.navigation.navigate('Algorithm', {
          //   tree: JSON.parse(res[1].rows.item(0).algorithm),
          //   pathToThis: [],
          // });
          // setData({ ...res[1].rows.item(0) })
          // setData(null)
        })
        .catch(error => {
          console.error('err');
        });
    });
  }, [])

  let view

  const handleViewRef = ref => view = ref;

  const bounce = () => view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));


  // console.info(Object.keys(data))

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
      }}>

      {
        true
          ?
          (
            <View>

              <TouchableWithoutFeedback onPress={bounce}>
                <Animatable.View ref={handleViewRef}>
                  <Text>Bounce me!</Text>
                </Animatable.View>
              </TouchableWithoutFeedback>

            </View>
          )
          :
          (
            <View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )
      }
    </View>
  );

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
});

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClinicMenuScreen);

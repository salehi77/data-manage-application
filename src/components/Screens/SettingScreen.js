import React from 'react'
import { Text, View, TextInput } from 'react-native'
import SettingHeaderElement from '../elements/Headers/SettingHeaderElement'
import { Slider } from 'react-native-elements';

// import Slider from "react-native-slider";
// 
// import Slider from '@react-native-community/slider';



const SettingScreen = (props) => {

  const [fontSize, setFontSize] = React.useState(14)

  return (
    <>
      <Text
        style={{ fontSize: fontSize }}
      >
        setting {fontSize}
      </Text>


      <View
      // style={{ direction: 'ltr' }}
      >
        <Text>lll</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 110 }}
          onChangeText={text => {
            if (/^[0-9]+$/.test(text) && parseInt(text) >= 12 && parseInt(text) <= 24) {
              setFontSize(parseInt(text))
            }
          }}

        />

      </View>
    </>
  )
}


// class SettingScreen extends React.Component {
//   render() {
//     return (

//       <>

//         <Slider
//           style={{ width: 300, height: 40 }}
//           minimumValue={0}
//           maximumValue={1}
//         // minimumTrackTintColor="#FFFFFF"
//         // maximumTrackTintColor="#000000"
//         />

//         <Text>kkk</Text>

//       </>

//     )
//   }
// }


// SettingScreen.navigationOptions = ({ navigation }) => {

//   return {
//     header: <SettingHeaderElement navigation={navigation} />,
//     // title: 'home',
//   };
// };

export default SettingScreen
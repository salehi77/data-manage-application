import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'


const DrawerElement = (props) => {

  console.log(Object.keys(props.descriptors.Home.options))

  console.log(props.descriptors.Setting.options.icon)


  return (
    <View>


      <View style={{ height: 150 }}>
        <ImageBackground
          source={require('../../assets/images/cover.jpeg')}
          style={{ flex: 1, width: 280, justifyContent: 'center' }}
        >
        </ImageBackground>
      </View>



      <View>


        {

          Object.keys(props.descriptors).map(descriptor => {
            return (
              <View
                key={descriptor}
              >
                <Text
                  onPress={() => props.navigation.navigate(descriptor)}
                >
                  {props.descriptors[descriptor].options.title ? props.descriptors[descriptor].options.title : descriptor}
                </Text>
              </View>
            )
          })

        }

      </View>


    </View>
  )

}



const styles = StyleSheet.create({



  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20,
    textAlign: 'center'
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    color: '#00adff'
  },
  activeBackgroundColor: {
    backgroundColor: 'grey'
  }
});

export default DrawerElement
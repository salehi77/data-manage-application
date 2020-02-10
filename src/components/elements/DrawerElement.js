import React from 'react'
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native'


const DrawerElement = (props) => {



  return (

    <ScrollView>


      <View style={{ height: 150 }}>
        <ImageBackground
          source={require('../../assets/images/cover.jpeg')}
          style={{ flex: 1, justifyContent: 'center' }}
        >
        </ImageBackground>
      </View>



      <View>


        {


          Object.entries(props.descriptors).map((descriptor, index) => {

            // console.log(index)s

            // console.log(Object.keys(descriptor[1]))
            // console.log(Object.keys(descriptor[1].options))


            return (
              <View key={index}>
                <Text
                  onPress={() => props.navigation.navigate(descriptor[0])}
                >
                  {descriptor[1].options.title}
                </Text>
              </View>
            )
          })

        }

      </View>


    </ScrollView>
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
})

export default DrawerElement
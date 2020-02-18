import React from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { ListItem, Divider } from 'react-native-elements'
import { ClinicIcon } from '../../config/icon-font'


const DrawerElement = (props) => {




  return (

    <ScrollView>


      <View style={{ height: 150 }}>


        <ImageBackground
          source={require('../../assets/images/cover.jpeg')}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >


          <TouchableOpacity>
            <Image
              source={require('../../assets/images/user.png')}
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>


        </ImageBackground>


      </View>



      <View>


        <ListItem
          Component={TouchableOpacity}
          onPress={() => props.navigation.navigate('Tools')}
          title={<Text style={{ fontFamily: props.theme.PRIMARY_FONT_FAMILY, fontSize: props.theme.FONT_SIZE_MEDIUM }}>ابزارها</Text>}
          leftIcon={<ClinicIcon name='tools' size={35} color='#484848' style={{ marginEnd: 5 }} />}
        />


        <Divider />


        <ListItem
          Component={TouchableOpacity}
          onPress={() => props.navigation.navigate('About')}
          title={<Text style={{ fontFamily: props.theme.PRIMARY_FONT_FAMILY, fontSize: props.theme.FONT_SIZE_MEDIUM }}>درباره ما</Text>}
          leftIcon={<ClinicIcon name='about-us' size={35} color='#484848' style={{ marginEnd: 5 }} />}
        />


        <Divider />



      </View>


    </ScrollView>
  )

}



const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(DrawerElement)
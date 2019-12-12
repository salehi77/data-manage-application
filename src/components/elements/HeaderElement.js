import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
// import {
//   Container,
//   Header,
//   Title,
//   Button,
//   Icon,
//   Left,
//   Right,
//   Body,
// } from 'native-base';
import { Header } from 'react-native-elements'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { ClinicIcon } from '../../config/icon-font'


const HeaderElement = props => {

  // props.navigation.toggleDrawer()

  return (
    <View style={{ height: 50 }}>


      <Header
        containerStyle={{
          height: '100%',
          paddingBottom: 25
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

              <AwesomeIcon name='bars' size={30} color='white' />

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

        <Text></Text>

      </Header>



    </View>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderElement);

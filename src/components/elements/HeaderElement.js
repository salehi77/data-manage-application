import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
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
import Icon from 'react-native-vector-icons/FontAwesome5';


const HeaderElement = props => {

  // props.navigation.toggleDrawer()

  return (
    <View style={{ height: 50 }}>
      {/* <Header noShadow style={{ height: '100%' }}>
        <Left>
          <Button transparent
            onPress={() => {
              props.navigation.toggleDrawer()
            }}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={{ marginTop: 20 }}>
          <Title
            style={{
              fontFamily: props.theme.PRIMARY_FONT_FAMILY_BOLD,
              fontSize: props.theme.FONT_SIZE_EXTRA_LARGE,
            }}>
            کلینیک
          </Title>
        </Body>
        <Right style={{ display: 'none' }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Right>
      </Header> */}



      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}

        containerStyle={{
          // backgroundColor: 'red',
          height: 50
        }}

      >

        <View>
          <Icon name='bars' />
        </View>

        <Text>center</Text>

        <Text>right</Text>

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

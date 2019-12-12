import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const HomeHeaderElement = props => {

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

              <FontAwesome5Icon name='bars' size={30} color='white' />

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

        <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center' }}>

          <View >

            <TouchableOpacity
              onPress={() => {
                console.log('setting')
                props.navigation.navigate('Setting')
              }}
            >
              <FontAwesome5Icon name='cog' color='white' size={30} />
            </TouchableOpacity>

          </View>

          <View style={{ marginEnd: 25 }}>

            <TouchableOpacity>
              <FontAwesome5Icon name='search' color='white' size={25} />
            </TouchableOpacity>

          </View>


        </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderElement);

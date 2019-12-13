import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const HomeHeaderElement = props => {

  return (
    <View style={{ height: 60 }}>


      <Header
        containerStyle={{
          height: '100%',
          paddingBottom: 25,
          backgroundColor: '#3498db'
        }}

      >

        <View
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >


          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.goBack()
            }}
          >

            <FontAwesome5Icon name='long-arrow-alt-right' size={30} color='#34495e' />

          </TouchableWithoutFeedback>

        </View>




        <Text></Text>

        <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center' }}>

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

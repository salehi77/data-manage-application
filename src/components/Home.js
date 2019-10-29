import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'خانه',
  };

  render() {
    let con = [
      {icon: 'brain', color: '#ff7a93'},
      {icon: 'burn', color: '#73dce6'},
      {icon: 'tooth', color: '#bbbbff'},
      {icon: 'heartbeat', color: '#e63535'},
      {icon: 'first-aid', color: '#5ad182'},
      {icon: 'crutch', color: '#bbaacc'},
      {icon: 'pills', color: '#9762e3'},
      {icon: 'bone', color: '#aaaadd'},
    ];
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          {con.map((c, i) => {
            return (
              <View
                style={{
                  // backgroundColor: '#aaaaaa',
                  margin: 5,
                  width: '30%',
                }}>
                <TouchableOpacity
                  style={{width: '100%', alignItems: 'center'}}
                  onPress={() => console.info('clicked')}>
                  <Icon name={c.icon} size={50} light color={c.color} />
                  <Text>{c.icon}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </>
    );
  }
}

export default Home;

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'خانه',
  };

  render() {
    return (
      <View>
        <Button
          title="کلینیک‌ها"
          onPress={() => this.props.navigation.navigate('Clinic', {})}
        />
      </View>
    );
  }
}

export default Home;

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => <Text>lll</Text>,
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.getParam('increaseCount')();
            console.log(navigation.state.params.title + 'jl');
          }}
          title={
            navigation.state.params
              ? navigation.state.params.title
              : 'defaulttt'
          }
          color="#000"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
    this.props.navigation.setParams({title: this.props.theme.FONT_WEIGHT_BOLD});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    // console.log(this.props.theme.FONT_WEIGHT_BOLD);
    return (
      <View>
        <Button title="inc" onPress={this._increaseCount} />
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

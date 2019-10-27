import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

class Algorithm extends Component {
  render() {
    let tree = this.props.navigation.getParam('tree');

    return (
      <View>
        <Text style={styles.question}>{tree.Text}</Text>
        {tree.options.map(option => {
          return (
            <TouchableOpacity
              key={option.ID}
              style={styles.option}
              onPress={() => {
                this.props.navigation.push('Algorithm', {
                  tree: option,
                });
              }}>
              <Text>{option.Text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    backgroundColor: '#408ec2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});

export default Algorithm;

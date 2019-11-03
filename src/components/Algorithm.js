import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

class Algorithm extends Component {
  render() {
    console.log(this.props.theme);

    let tree = this.props.navigation.getParam('tree');

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>
        <ScrollView>
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
        </ScrollView>
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

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Algorithm);

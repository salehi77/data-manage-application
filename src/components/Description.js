import React, {Component} from 'react';
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
import {connect} from 'react-redux';

class Description extends Component {
  state = {
    data: null,
  };

  render() {
    let desc = this.props.navigation.getParam('description');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>
        <ScrollView
          style={{
            marginTop: 10,
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              textAlign: 'justify',
              fontFamily: this.props.theme.SECONDARY_FONT_FAMILY,
              fontSize: this.props.theme.FONT_SIZE_MEDIUM,
              lineHeight: 25,
            }}>
            {desc}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Description);

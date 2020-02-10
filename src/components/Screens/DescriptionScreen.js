import React, { Component } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'

class DescriptionScreen extends Component {
  state = {
    data: null,
  }

  render() {
    let desc = this.props.navigation.getParam('description')
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>
        <ScrollView style={styles.mainView}>
          <Text
            style={[
              styles.descriptionText,
              {
                fontFamily: this.props.theme.SECONDARY_FONT_FAMILY,
                fontSize: this.props.theme.FONT_SIZE_MEDIUM,
              },
            ]}>
            {desc}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  descriptionText: {
    textAlign: 'justify',
    lineHeight: 25,
  },
})

const mapStateToProps = state => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DescriptionScreen)

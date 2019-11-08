import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Algorithm extends Component {
  render() {
    let pathToThis = this.props.navigation.getParam('pathToThis');
    let tree = this.props.navigation.getParam('tree');

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>
        <ScrollView>
          {tree.options.length === 0 ? (
            <>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                  paddingBottom: 20,
                }}>
                <Text
                  style={{
                    paddingTop: 10,
                    paddingBottom: 5,
                    paddingHorizontal: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 8,
                    marginHorizontal: 16,
                    color: 'black',
                    alignSelf: 'flex-start',
                    fontSize: this.props.theme.FONT_SIZE_MEDIUM,
                    fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
                  }}>
                  نتیجه نهایی:
                </Text>
                <Text
                  style={{
                    fontSize: this.props.theme.FONT_SIZE_MEDIUM,
                    fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
                    backgroundColor: this.props.theme.PRIMARY_COLOR,
                    width: '75%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    paddingVertical: 30,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    borderColor: this.props.theme.PRIMARY_COLOR_BOLD,
                    borderWidth: 1,
                  }}>
                  {tree.Text}
                </Text>
              </View>
              <View style={{marginHorizontal: 5}}>
                <Text
                  style={{
                    marginTop: 10,
                    marginHorizontal: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 16,
                    fontSize: this.props.theme.FONT_SIZE_MEDIUM,
                    fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
                    color: 'black',
                    alignSelf: 'flex-start',
                  }}>
                  مراحل:
                </Text>
                {pathToThis.map((option, index) => {
                  return (
                    <View key={index}>
                      <Text
                        style={{
                          backgroundColor: '#0055aa',
                          color: 'white',
                          marginVertical: 10,
                          paddingHorizontal: 20,
                          paddingVertical: 10,
                          alignSelf: 'center',
                          textAlign: 'justify',
                        }}>
                        {option}
                      </Text>
                      {pathToThis.length !== index + 1 && (
                        <Icon
                          name="arrow-down"
                          size={20}
                          style={{alignSelf: 'center'}}
                        />
                      )}
                    </View>
                  );
                })}
              </View>
            </>
          ) : (
            <>
              <Text
                style={{
                  fontSize: this.props.theme.FONT_SIZE_MEDIUM,
                  fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
                  borderColor: this.props.theme.PRIMARY_COLOR,
                  paddingTop: 10,
                  paddingBottom: 5,
                  paddingHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 8,
                  marginHorizontal: 16,
                  color: 'black',
                  borderWidth: 2,
                  borderRadius: 25,
                  alignSelf: 'flex-start',
                }}>
                {tree.Text}
              </Text>

              {tree.options.map(option => {
                return (
                  <TouchableOpacity
                    key={option.ID}
                    style={{
                      backgroundColor: '#2196F3',
                      padding: 20,
                      marginVertical: 8,
                      marginHorizontal: 16,
                      borderRadius: 10,
                      flex: 1,
                      flexDirection: 'row',
                    }}
                    onPress={() => {
                      let pathToThis = [
                        ...this.props.navigation.getParam('pathToThis'),
                      ];
                      pathToThis.push(option.Text);
                      this.props.navigation.push('Algorithm', {
                        tree: option,
                        pathToThis,
                      });
                    }}>
                    <Text
                      style={{
                        flexGrow: 1,
                        fontSize: this.props.theme.FONT_SIZE_MEDIUM,
                        fontFamily: this.props.theme.PRIMARY_FONT_FAMILY,
                        color: 'white',
                        maxWidth: '90%',
                      }}>
                      {option.Text}
                    </Text>
                    <Icon
                      style={{flexGrow: 1}}
                      name="arrow-left"
                      size={25}
                      color="#ededed"
                    />
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

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

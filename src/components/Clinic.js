import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Clinic extends Component {
  static navigationOptions = {
    title: 'کلینیک‌ها',
  };

  state = {
    data: null,
  };

  componentDidMount() {
    const {sqlite} = this.props;

    sqlite.transaction(tx => {
      tx.executeSql('SELECT * FROM clinic')
        .then(res => {
          this.setState({
            data: [...res[1].rows.raw()],
          });
        })
        .catch(error => {
          console.error('err');
        });
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>
        {this.state.data ? (
          <View style={styles.clinicsWrapper}>
            {this.state.data.map((clinic, i) => {
              return (
                <TouchableOpacity
                  key={clinic.ID}
                  style={styles.clinicButton}
                  onPress={() => {
                    this.props.navigation.navigate('ClinicMenu', {
                      clinicID: clinic.ID,
                    });
                  }}>
                  <Icon
                    name={clinic.icon_name}
                    size={50}
                    color={clinic.icon_color}
                  />
                  <Text
                    style={{
                      fontFamily: this.props.theme.PRIMARY_FONT_FAMILY_BOLD,
                      color: this.props.theme.PRIMARY_TEXT_COLOR,
                      fontSize: this.props.theme.FONT_SIZE_MEDIUM,
                    }}>
                    {clinic.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <Text>isloaing...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clinicsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '3%',
  },
  clinicButton: {
    marginHorizontal: 5,
    marginVertical: 10,
    width: '30%',
    alignItems: 'center',
  },
  clinicText: {},
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
)(Clinic);

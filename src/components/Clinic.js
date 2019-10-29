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

  clinicSelected = id => {
    this.props.navigation.navigate('ClinicMenu', {
      clinicID: id,
    });
  };

  render() {
    return this.state.data ? (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: '10%',
        }}>
        {this.state.data.map((clinic, i) => {
          return (
            <View
              key={clinic.ID}
              style={{
                marginHorizontal: 5,
                marginVertical: 10,
                width: '30%',
              }}>
              <TouchableOpacity
                style={{width: '100%', alignItems: 'center'}}
                onPress={() => this.clinicSelected(clinic.ID)}>
                <Icon
                  name={clinic.icon_name}
                  size={50}
                  color={clinic.icon_color}
                />
                <Text>{clinic.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    ) : (
      <Text>isloaing...</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#cccccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
});

const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clinic);

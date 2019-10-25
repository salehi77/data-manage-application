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
import {connect} from 'react-redux';

class ClinicMenu extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    const {sqlite} = this.props;

    let clinicID = this.props.navigation.getParam('clinicID');

    sqlite.transaction(tx => {
      tx.executeSql(`SELECT * FROM clinic WHERE ID = ${clinicID}`)
        .then(res => {
          this.setState({
            data: {...res[1].rows.item(0)},
          });
        })
        .catch(error => {
          console.error('err');
        });
    });
  }
  render() {
    return this.state.data ? (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            this.props.navigation.navigate('Algo', {
              tree: this.state.data.algorithm,
            });
          }}>
          <Text>ورود</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <Text>idloading...</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#32a852',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    // color: 'white',
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
)(ClinicMenu);

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

class Description extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    const {sqlite} = this.props;

    // let clinicID = this.props.navigation.getParam('clinicID');
    let clinicID = 1;

    sqlite.transaction(tx => {
      tx.executeSql(`SELECT * FROM clinic WHERE ID = ${clinicID}`)
        .then(res => {
          console.log(res[1].rows.item(0).description);
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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR,
        }}>
        {this.state.data ? (
          <View style={{}}>
            <Text>{this.state.data.description}</Text>
          </View>
        ) : (
          <Text>isloading...</Text>
        )}
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
)(Description);

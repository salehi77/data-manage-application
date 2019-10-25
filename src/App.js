import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {connect} from 'react-redux';

import {setDatabase} from './actions/localdb';
import Sample from './components/Sample';

class App extends Component {
  componentDidMount() {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    SQLite.openDatabase({name: 'test', location: 'default'})
      .then(db => {
        this.props.setDatabase(db);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View>
        <Sample />
      </View>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {
  setDatabase,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

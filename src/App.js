import React, {Component} from 'react';
import SQLite from 'react-native-sqlite-storage';
import {connect} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {setDatabase} from './actions/localdb';

import Routes from './Routes';
const AppContainer = createAppContainer(Routes);

const okCallback = () => {
  console.log('OK');
};
const errorCallback = () => {
  console.log('ERROR');
};

class App extends Component {
  componentDidMount() {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    SQLite.openDatabase(
      {name: 'clinics_db', createFromLocation: '~clinics_db'},
      okCallback,
      errorCallback,
    )
      .then(db => {
        this.props.setDatabase(db);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  setDatabase,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

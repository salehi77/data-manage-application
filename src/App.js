import React, { Component } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nManager } from 'react-native';

import { setDatabase } from './actions/localdb';

import Routes from './Routes';
const AppContainer = Routes;

const okCallback = () => {
  console.log('OK');
};
const errorCallback = () => {
  console.log('ERROR');
};

class App extends Component {
  constructor(props) {
    super(props);
    I18nManager.forceRTL(true);
  }

  componentDidMount() {
    // SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    SQLite.openDatabase(
      { name: 'clinics_db', createFromLocation: '~clinics_db' },
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

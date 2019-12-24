import React, { Component } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nManager, Text, View } from 'react-native';
// import RNRestart from 'react-native-restart'

import { setDatabase } from './actions/localdb';

import Routes from './Routes';
const AppContainer = Routes;

const okCallback = () => {
  console.log('OK');
};
const errorCallback = () => {
  console.log('ERROR');
};






const App = (props) => {
  I18nManager.forceRTL(true);


  React.useEffect(() => {
    // SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    SQLite.openDatabase(
      { name: 'clinics_db', createFromLocation: '~/db/clinics_db' },
      okCallback,
      errorCallback,
    )
      .then(db => {
        console.info(db)
        // props.setDatabase(db);




        db.transaction(tx => {
          tx.executeSql('SELECT * FROM clinic')
            .then(res => {
              // let data = [...res[1].rows.raw()];
              console.log(res)
            })
            .catch(error => {
              console.log(error);
            });
        });





      })
      .catch(error => {
        console.log(error);
      });
  }, [])


  return (
    <SafeAreaProvider>
      <Text>kjkk</Text>
    </SafeAreaProvider>
  );

}








const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  setDatabase,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

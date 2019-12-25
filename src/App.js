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

let okCallback = (db, { setDatabase }) => {
  console.log('OK');

  setDatabase(db)

  // db.transaction((tx) => {
  //   try {
  //     tx.executeSql('SELECT * FROM clinic', [], (tx, results) => {
  //       console.log("Query completed");
  //       console.log(results)
  //       var len = results.rows.length;
  //       for (let i = 0; i < len; i++) {
  //         let row = results.rows.item(i);
  //         console.log(Object.keys(row))
  //       }
  //     });
  //   }
  //   catch (exp) {
  //     console.log('exppppppppppppppp')
  //   }
  // });
};



const errorCallback = (err) => {
  console.log('======================Error======================');
}




const App = (props) => {

  I18nManager.forceRTL(true);

  React.useEffect(() => {
    // SQLite.DEBUG(true);
    SQLite.openDatabase(
      { name: 'clinics_db', createFromLocation: '~/custom/clinics_db' },
      (db) => okCallback(db, props),
      errorCallback,
    )
  }, [])



  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );

}








const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {
  setDatabase,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

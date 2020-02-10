import React, { Component } from 'react'
import SQLite from 'react-native-sqlite-storage'
import { connect } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppState, I18nManager, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import RNRestart from 'react-native-restart'

import { setDatabase } from './actions/localdb'
import { changeMainFont } from './actions/themeAction'

import { getFontStorage, setFontStorage } from './storages/@fontSize'

import Routes from './Routes'
const AppContainer = createAppContainer(Routes)

let okCallback = (db, props) => {
  props.setDatabase(db)
  console.log('OK')
}



const errorCallback = (err) => {
  console.log('======================Error======================')
}









const App = (props) => {


  React.useEffect(() => {

    if (I18nManager.isRTL !== true) {
      I18nManager.forceRTL(true)
      RNRestart.Restart()
    }

    SQLite.openDatabase(
      { name: 'app', createFromLocation: '~/custom/app.sqlite3' },
      (db) => okCallback(db, props),
      errorCallback,
    )

    getFontStorage()
      .then(value => {
        if (value) {
          props.changeMainFont(value)
        }
      })
      .catch(e => { })

  }, [])

  React.useEffect(() => {
    AppState.removeEventListener('change', _handleAppStateChange)
    AppState.addEventListener('change', _handleAppStateChange)
  }, [props.theme])


  function _handleAppStateChange(nextAppState) {
    if (nextAppState.match(/inactive|background/)) {
      setFontStorage(props.theme.MAIN_FONT_SIZE)
    }
  }


  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  )


}










































// class App extends React.Component {


//   componentDidMount() {

//     if (I18nManager.isRTL != true) {
//       I18nManager.forceRTL(true)
//       RNRestart.Restart()
//     }


//     SQLite.openDatabase(
//       { name: 'clinics_db', createFromLocation: '~/custom/clinics_db' },
//       (db) => okCallback(db, this.props),
//       errorCallback,
//     )


//     AppState.addEventListener('change', this._handleAppStateChange)

//     getFontStorage()
//       .then(value => {
//         console.log(value)
//         if (value) {
//           this.props.changeMainFont(value)
//         }
//       })
//       .catch(e => { })

//   }

//   // componentWillUnmount() {
//   //   console.log(this.props.theme.MAIN_FONT_SIZE, 'unmount')
//   // }


//   _handleAppStateChange = (nextAppState) => {
//     if (nextAppState.match(/inactive|background/)) {
//       console.log(this.props.theme.MAIN_FONT_SIZE, 'background')
//       setFontStorage(this.props.theme.MAIN_FONT_SIZE)
//     }
//   }

//   render() {

//     console.log(this.props.theme.MAIN_FONT_SIZE, 'render')


//     return (
//       <SafeAreaProvider>
//         <AppContainer />
//       </SafeAreaProvider>
//     )

//   }

// }











const mapStateToProps = (state) => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  }
}

const mapDispatchToProps = {
  setDatabase,
  changeMainFont
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

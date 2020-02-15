import React, { Component } from 'react'
import SQLite from 'react-native-sqlite-storage'
import { connect } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppState, I18nManager, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import RNRestart from 'react-native-restart'

import { setDatabase } from './actions/localdb'
import { changeMainFont, changePrimaryColor, changeThemeBackground } from './actions/themeAction'

import { getFontStorage, setFontStorage } from './storages/@fontSize'
import { getThemeStorage, setThemeStorage } from './storages/@theme'


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

    getThemeStorage()
      .then(value => {
        if (value) {
          props.changePrimaryColor({ primary: value.color, secondary: value.colorSec })
          props.changeThemeBackground(value.mode)
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
      setThemeStorage(props.theme.current)
    }
  }


  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  )


}



const mapStateToProps = (state) => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  }
}

const mapDispatchToProps = {
  setDatabase,
  changeMainFont,
  changePrimaryColor,
  changeThemeBackground
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import AsyncStorage from '@react-native-community/async-storage'


export const getThemeStorage = async () => {
  try {
    let theme = await AsyncStorage.getItem('@theme')
    if (theme) {
      theme = JSON.parse(theme)
      return theme
    }
    return null
  }
  catch (e) {
    return null
  }
}


export const setThemeStorage = async (theme) => {
  try {
    await AsyncStorage.setItem('@theme', JSON.stringify(theme))
  }
  catch (e) {
  }
}
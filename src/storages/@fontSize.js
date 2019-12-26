import AsyncStorage from '@react-native-community/async-storage';


export const getFontStorage = async () => {
  try {
    let fontSize = await AsyncStorage.getItem('@fontSize')
    if (fontSize && !isNaN(parseInt(fontSize))) {
      return parseInt(fontSize)
    }
    return null
  }
  catch (e) {
    return null
  }
}


export const setFontStorage = async (fontSize) => {
  try {
    await AsyncStorage.setItem('@fontSize', fontSize.toString())
  } catch (e) {
  }
}
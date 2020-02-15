import {
  CHANGE_MAIN_FONT_SIZE,
  CHANGE_PRIMARY_COLOR,
  CHANGE_THEME_BACKGROUND
} from '../types'

export const changeMainFont = (fontSize) => {
  return {
    type: CHANGE_MAIN_FONT_SIZE,
    fontSize,
  }
}

export const changePrimaryColor = ({ primary, secondary }) => {
  return {
    type: CHANGE_PRIMARY_COLOR,
    primary,
    secondary
  }
}

export const changeThemeBackground = (mode) => {
  return {
    type: CHANGE_THEME_BACKGROUND,
    mode
  }
}

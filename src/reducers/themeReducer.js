import { base, Theme, bluishTheme, colorOptions, colorOptionsSecondary } from './theme'

import {
  CHANGE_MAIN_FONT_SIZE,
  CHANGE_PRIMARY_COLOR,
  CHANGE_THEME_BACKGROUND
} from '../types'


const initialState = {
  ...base,
  ...Theme.light,
  ...colorOptions.blue,
  ...colorOptionsSecondary.cyan,
  current: {
    mode: 'light',
    color: 'purple',
    colorSec: 'cyan'
  }
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_MAIN_FONT_SIZE:
      return { ...state, MAIN_FONT_SIZE: action.fontSize }

    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        ...colorOptions[action.primary],
        ...colorOptionsSecondary[action.secondary],
        current: {
          ...state.current, color: action.primary, colorSec: action.secondary
        }
      }

    case CHANGE_THEME_BACKGROUND:
      return {
        ...state,
        ...Theme[action.mode],
        current: {
          ...state.current, mode: action.mode
        }
      }

    default:
      return state

  }
}

export default themeReducer

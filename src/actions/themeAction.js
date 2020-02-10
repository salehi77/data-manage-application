import { CHANGE_MAIN_FONT_SIZE } from '../types'

export const changeMainFont = (fontSize) => {
  return {
    type: CHANGE_MAIN_FONT_SIZE,
    fontSize,
  }
}

import { CHANGE_ALGORITHM_FONT_SIZE } from '../types'

export const changeAlgFontSize = (fontSize) => {
  return {
    type: CHANGE_ALGORITHM_FONT_SIZE,
    fontSize,
  };
};

import { base, darkTheme, lightTheme, bluishTheme, colorOptions, colorOptionsSecondary } from './theme';

import { CHANGE_ALGORITHM_FONT_SIZE } from '../types'

const initialState = {
  ...base,
  ...lightTheme,
  ...colorOptions.blue,
  ...colorOptionsSecondary.cyan,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_ALGORITHM_FONT_SIZE:
      return { ...state, ALGORITHM_FONT_SIZE: action.fontSize }

    default:
      return state;

  }
};

export default themeReducer;

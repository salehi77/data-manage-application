import {base, darkTheme, lightTheme, bluishTheme, colorOptions} from './theme';

const initialState = {
  ...base,
  ...lightTheme,
  ...colorOptions.green,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return;
    default:
      return state;
  }
};

export default themeReducer;

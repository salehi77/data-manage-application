import {base, darkTheme, lightTheme, bluishTheme, colorOptions} from './theme';

const initialState = {
  ...base,
  ...bluishTheme,
  ...colorOptions.blue,
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

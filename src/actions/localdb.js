import {SET_DATABASE} from '../types';

export const setDatabase = sqlite => {
  return {
    type: SET_DATABASE,
    sqlite,
  };
};

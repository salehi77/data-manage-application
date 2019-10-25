import {SET_DATABASE} from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_DATABASE:
      return {...state, sqlite: action.sqlite};
    default:
      return state;
  }
}

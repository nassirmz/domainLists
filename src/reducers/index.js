import { GET_LISTS } from '../constants/index';

// reducer that returns new state based on the action type
export function listsReducer(state, action) {
  switch (action.type) {
    case GET_LISTS:
      return action.lists;
    default:
      return [];
  }
}
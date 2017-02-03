import { GET_LISTS } from '../constants';

// reducer that returns new state based on the action type
export default function listsReducer(state = [], action) {
  switch (action.type) {
    case GET_LISTS:
      return action.lists;
    default:
      return state;
  }
}
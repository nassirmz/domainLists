import { GET_LISTS, SET_DETAIL, GET_LIST_DETAIL, UNSET_DETAIL } from '../constants';

// reducer that returns new state based on the action type

export function listsReducer(state = [], action) {
  switch (action.type) {
    case GET_LISTS:
      return action.lists;
    default:
      return state;
  }
}

export function listDetailReducer(state = {}, action) {
  switch (action.type) {
    case GET_LIST_DETAIL:
      return action.listDetail;
    default:
      return state;
  }
}

export function isDetailReducer(state = false, action) {
  switch (action.type) {
    case SET_DETAIL:
      return true;
    case UNSET_DETAIL:
      return false;
    default:
      return state;
  }
}
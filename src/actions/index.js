import { GET_LISTS } from '../constants';

// action creator functions
export function getLists(lists) {
  return {
    lists,
    type: GET_LISTS,
  };
}
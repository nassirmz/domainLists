import { GET_LISTS } from '../constants';

// action creator functions
export default function getLists(lists) {
  return {
    lists,
    type: GET_LISTS,
  };
}
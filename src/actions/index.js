import axios from 'axios';

import { GET_LISTS } from '../constants';

// action creator functions
export function getLists(lists) {
  return {
    lists,
    type: GET_LISTS,
  };
}

// action creator that return a function instead of an object, thanks to REDUX-THUNK MIDDLEWARE
export function startGetLists() {
  return (dispatch) => {
    console.log('called');
    axios.get('/domains')
      .then((resp) => {
        console.log(resp.data.domains, 'domains');
        dispatch(getLists(resp.data.domains));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
}
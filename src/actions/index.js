import axios from 'axios';

import { GET_LISTS, SET_DETAIL, UNSET_DETAIL, GET_LIST_DETAIL } from '../constants';

// action creator functions
export function getLists(lists) {
  return {
    lists,
    type: GET_LISTS,
  };
}

export function setDetail() {
  return {
    type: SET_DETAIL,
  };
}

export function unsetDetail() {
  return {
    type: UNSET_DETAIL,
  };
}

export function getListDetail(listDetail) {
  return {
    listDetail,
    type: GET_LIST_DETAIL,
  };
}

// action creator that return a function instead of an object, thanks to REDUX-THUNK MIDDLEWARE
export function startGetLists() {
  return (dispatch) => {
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

export function starGetListDetail(id) {
  return (dispatch) => {
    axios.get(`/domains/${id}`)
      .then((resp) => {
        console.log(resp.data, 'DETAIL LISTS');
        dispatch(getListDetail(resp.data));
        dispatch(setDetail());
      })
      .catch((error) => {
        dispatch(unsetDetail());
        console.error(error);
      });
  };
}
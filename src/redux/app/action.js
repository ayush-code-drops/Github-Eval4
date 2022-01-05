import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";

export function searchRequest() {
  return {
    type: SEARCH_REQUEST
  };
}
export function searchSuccess(list) {
  return {
    type: SEARCH_SUCCESS,
    payload: list
  };
}
export function searchFailuret(err) {
  return {
    type: SEARCH_FAILURE,
    payload: err
  };
}

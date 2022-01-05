import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actionTypes";

const initState = {
  list: [],
  isLoading: false,
  isError: false
};
export function appReducer(state = initState, { type, payload }) {
  switch (type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: payload
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
}

import { LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isAuth: false
};

export function authReducer(state = initState, { type }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true
      };
    default:
      return state;
  }
}

import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  logedIn: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        logedIn: false,
      };
  }
  return state;
};

export default reducer;

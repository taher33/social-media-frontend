import { LOGIN, LOGOUT, POSTS, PROFILE_POSTS, PROFILE_DATA } from "../actions";

const initialState = {
  user: {},
  logedIn: false,
  posts: [],
  profilePosts: [],
  profileData: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        logedIn: false,
      };
    case POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case PROFILE_POSTS:
      return {
        ...state,
        profilePosts: action.payload,
      };
    case PROFILE_DATA: {
      return {
        ...state,
        profileData: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
  return state;
};

export default reducer;

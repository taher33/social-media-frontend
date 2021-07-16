import { fetchOneUser_posts, fetchPosts } from "../api/fetchData";
import { axios_instance } from "../utils/axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const POSTS = "POSTS";
export const PROFILE_POSTS = "PROFILE_POSTS";
export const PROFILE_DATA = "PROFILE_DATA";

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const logout_server = () => async (dispatch) => {
  try {
    await axios_instance(true)({
      method: "POST",
      url: "/users/logout",
    });
    dispatch(logout());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const checkLog = () => async (dispatch) => {
  try {
    const { data } = await axios_instance(true)({
      url: "/users/checkLogin",
      data: { checkLogIn: "true" },
    });

    console.log(data);
    dispatch(login(data.user));
  } catch (error) {
    console.log(error);
  }
};

const storePosts = (posts) => {
  return {
    type: POSTS,
    payload: posts,
  };
};
const storeProfilePosts = (posts) => {
  return {
    type: PROFILE_POSTS,
    payload: posts,
  };
};
const storeProfileData = (data) => {
  return {
    type: PROFILE_DATA,
    payload: data,
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await fetchPosts();

      dispatch(storePosts(posts));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProfilePosts = (id) => {
  return async (dispatch) => {
    try {
      const { posts } = await fetchOneUser_posts(id);

      dispatch(storeProfilePosts(posts));
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

// export const getProfilePosts_pages = (id) => {
//   return (dispatch) => {
//     Axios.get(`https://social-app-taher.herokuapp.com/pages/${id}`, {
//       withCredentials: true,
//     })
//       .then((res) => {
//         dispatch(storeProfilePosts(res.data.pagePosts));
//         dispatch(storeProfileData(res.data.page));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

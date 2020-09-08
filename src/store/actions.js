import Axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const POSTS = "POSTS";
export const PROFILE_POSTS = "PROFILE_POSTS";
export const PROFILE_DATA = "PROFILE_DATA";

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const checkLog = () => dispatch => {
  Axios.get("http://localhost:5000/users/checkLogin", {
    data: { checkLogIn: "true" },
    withCredentials: true,
  })
    .then(res => {
      dispatch(login());
    })
    .catch(err => {
      console.log(err);
    });
};

const storePosts = posts => {
  return {
    type: POSTS,
    payload: posts,
  };
};
const storeProfilePosts = posts => {
  return {
    type: PROFILE_POSTS,
    payload: posts,
  };
};
const storeProfileData = data => {
  return {
    type: PROFILE_DATA,
    payload: data,
  };
};

export const getPosts = () => {
  return dispatch => {
    Axios.get("http://localhost:5000/posts", {
      withCredentials: true,
      // timeout: 1000,
    })
      .then(res => {
        dispatch(storePosts(res.data.posts));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getProfilePosts = id => {
  return dispatch => {
    console.log(id);
    Axios.get(`http://localhost:5000/posts?user=${id}`, {
      withCredentials: true,
      // params: { profile: true },
    })
      .then(res => {
        dispatch(storeProfilePosts(res.data.posts));
        dispatch(storeProfileData(res.data.user));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getProfilePosts_pages = id => {
  return dispatch => {
    Axios.get(`http://localhost:5000/pages/${id}`, {
      withCredentials: true,
      // params: { profile: true },
    })
      .then(res => {
        console.log(res.data);
        dispatch(storeProfilePosts(res.data.pagePosts));
        dispatch(storeProfileData(res.data.page));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

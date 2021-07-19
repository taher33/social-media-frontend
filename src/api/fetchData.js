import { Router } from "react-router-dom";
import { axios_instance } from "../utils/axios";

export const fetchUsers = async () => {
  try {
    const { data } = await axios_instance()({
      method: "GET",
      url: "users",
    });
    return data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const fetchPosts = async (page = 1) => {
  let result = {
    posts: [],
    err: {},
    haseMore: false,
  };
  try {
    const {
      data: { posts, haseMore },
    } = await axios_instance(true)({
      method: "GET",
      url: "posts?page=" + page,
    });
    result.posts = posts;
    result.haseMore = haseMore;

    return result;
  } catch (err) {
    result.err = err.response.data;
    return result;
  }
};

// export const fetchPages = async () => {
//   try {
//     const { data } = await axios_instance(true)().get(
//       "https://social-app-taher.herokuapp.com/pages",
//       {
//         withCredentials: true,
//       }
//     );
//     return data;
//   } catch (err) {
//     return err.response.data;
//   }
// };

export const fetchOneUser = async (id) => {
  try {
    const { data } = await axios_instance(true)({
      method: "GET",
      url: "users/one/" + id,
    });
    return data;
  } catch (err) {
    console.log(err.response.data);
    console.log(Router);
    throw err.response.data;
  }
};

export const fetchOneUser_posts = async (id, page = 1) => {
  try {
    const { data } = await axios_instance(true)({
      method: "GET",
      url: "posts/?user=" + id + "&page=" + page,
    });
    return data;
  } catch (err) {
    console.log(err.response.data);
    return {};
  }
};

// export const fetchOnePage = async (id) => {
//   try {
//     const { data } = await axios({
//       method: "GET",
//       url: "https://social-app-taher.herokuapp.com/pages/" + id,

//       withCredentials: true,
//     });
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

import axios from "axios";
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

export const fetchPosts = async () => {
  let result = {
    posts: [],
    err: {},
  };
  try {
    const {
      data: { posts },
    } = await axios_instance(true)({
      method: "GET",
      url: "posts",
    });
    result.posts = posts;

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
  }
};

export const fetchOneUser_posts = async (id) => {
  try {
    const { data } = await axios_instance(true)({
      method: "GET",
      url: "posts/?user=" + id,
    });
    return data;
  } catch (err) {
    console.log(err.response.data);
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

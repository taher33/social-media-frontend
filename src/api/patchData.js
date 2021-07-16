import axios from "axios";
import { axios_instance } from "../utils/axios";
export const likePosts = async (id) => {
  try {
    await axios_instance(true)({
      method: "PATCH",
      url: "posts",
      data: {
        postId: id,
      },
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const register_follower_db = async (email) => {
  try {
    await axios_instance(true)({
      method: "PATCH",

      data: {
        email,
      },
      url: "users/follow",
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

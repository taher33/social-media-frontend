import axios from "axios";
import { axios_instance } from "../utils/axios";

export const creatUser = async ({ email, name, password, passwordConf }) => {
  try {
    const { data } = await axios_instance(true)({
      method: "POST",
      url: "/users",

      data: { email, password, name, passwordConf },
    });
    return data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const createPost = async (post) => {
  const formData = new FormData();

  formData.append("content", post.post);
  formData.append("picture", post.picture[0]);

  try {
    const result = await axios_instance(true)({
      method: "POST",

      url: "/posts",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    return result;
  } catch (err) {
    console.log(err.response.data);
    return (err.data = null);
  }
};

export const login_to_api = async ({ email, password }) => {
  const { data } = await axios_instance(true)({
    method: "POST",
    url: "users/login",

    headers: {
      crossDomain: true,
    },
    data: { email, password },
  });
  return data;
};

export const createComment = async (id, body) => {
  let error = false;
  try {
    const { data } = await axios_instance(true)({
      method: "POST",
      url: "posts/" + id + "/comment",

      data: { text: body },
    });

    return { data, error };
  } catch (err) {
    error = true;
    return { error, data: {} };
  }
};

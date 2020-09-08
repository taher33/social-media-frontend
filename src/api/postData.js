import axios from "axios";

export const creatUser = async ({ email, name, password, passwordConf }) => {
  try {
    const { data } = await axios.post("http://localhost:5000/users/", {
      email,
      name,
      password,
      passwordConf,
    });
    return data;
  } catch (err) {
    return err;
  }
};

export const createPost = async post => {
  console.log(post);

  try {
    const result = await axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/posts",
      data: {
        content: post.post,
      },
    });

    return result;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const login_to_api = async ({ email, password }) => {
  const { data } = await axios({
    method: "POST",
    url: "http://localhost:5000/users/login",
    withCredentials: true,
    headers: {
      crossDomain: true,
    },
    data: { email, password },
  });
  return data;
};

export const createComment = async (id, text) => {
  console.log(text.reply);
  let error = false;
  try {
    const { data } = await axios({
      method: "POST",
      url: `http://localhost:5000/posts/${id}/comment`,
      withCredentials: true,
      data: { text: text.reply },
    });

    return { data, error };
  } catch (err) {
    console.log(err.response.data);
    error = true;
    return error;
  }
};

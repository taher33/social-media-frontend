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
  const formData = new FormData();

  formData.append("content", post.post);
  formData.append("picture", post.picture[0]);
  console.log(post.picture[0]);
  try {
    const result = await axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:5000/posts",
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

export const create_page = async name => {
  console.log(name);
  try {
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:5000/pages",
      withCredentials: true,
      data: {
        name,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

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

export const createPost = async state => {
  try {
    console.log(state.name, state.postData);
    const result = await axios.post("http://localhost:5000/posts", {
      name: state.name,
      text: state.postData,
      // likes,
    });

    return result;
  } catch (err) {
    console.log("from postData");
  }
};

export const login_to_api = async ({ email, password }) => {
  const data = await axios.post("http://localhost:5000/users/login", {
    email,
    password,
  });
  return data;
};

import axios from "axios";

export const creatUser = async ({ name, email, password }) => {
  const result = await axios.post("http://localhost:5000/users", {
    name,
    email,
    password,
  });
  return result;
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

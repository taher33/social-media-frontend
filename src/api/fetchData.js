import axios from "axios";
export const fetchUsers = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/users");
    return data;
  } catch (err) {
    console.log(err);
  }
};
//still needs work
export const fetchPosts = async () => {
  try {
    const {
      data: { posts },
    } = await axios.get("http://localhost:5000/posts", {
      withCredentials: true,
    });
    return posts;
  } catch (err) {
    return err.response.data;
  }
};

export const fetchPages = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/pages", {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    return err.response.data;
  }
};

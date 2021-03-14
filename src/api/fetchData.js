import axios from "axios";
export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://social-app-taher.herokuapp.com/users"
    );
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
    } = await axios.get("https://social-app-taher.herokuapp.com/posts", {
      withCredentials: true,
    });
    return posts;
  } catch (err) {
    return err.response.data;
  }
};

export const fetchPages = async () => {
  try {
    const { data } = await axios.get(
      "https://social-app-taher.herokuapp.com/pages",
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const fetchOneUser = async (id) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://social-app-taher.herokuapp.com/users/one/" + id,

      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchOneUser_posts = async (id) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://social-app-taher.herokuapp.com/posts/?user=" + id,

      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchOnePage = async (id) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://social-app-taher.herokuapp.com/pages/" + id,

      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

import axios from "axios";
export const likePosts = async (id) => {
  try {
    await axios({
      method: "PATCH",
      withCredentials: true,
      data: {
        postId: id,
      },
      url: "https://social-app-taher.herokuapp.com/posts",
    });
  } catch (err) {
    console.log(err);
  }
};

export const register_follower_db = async (email) => {
  try {
    await axios({
      method: "PATCH",
      withCredentials: true,
      data: {
        email,
      },
      url: "https://social-app-taher.herokuapp.com/users/follow",
    });
  } catch (err) {
    console.log(err);
  }
};

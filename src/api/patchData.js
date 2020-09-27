import axios from "axios";
export const likePosts = async id => {
  try {
    await axios({
      method: "PATCH",
      withCredentials: true,
      data: {
        postId: id,
      },
      url: "http://localhost:5000/posts",
    });
  } catch (err) {
    console.log(err);
  }
};

export const register_follower_db = async email => {
  try {
    await axios({
      method: "PATCH",
      withCredentials: true,
      data: {
        email,
      },
      url: "http://localhost:5000/users/follow",
    });
  } catch (err) {
    console.log(err);
  }
};

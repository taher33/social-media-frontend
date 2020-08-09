import axios from "../utils/axios";
export const likePosts = async id => {
  try {
    await axios.patch("/posts", {
      postId: id,
      // isAdmin: true,
    });
  } catch (err) {
    console.log(err);
  }
};

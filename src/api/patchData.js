import axios from "axios";
export const likePosts = async id => {
  try {
    await axios.patch("http://localhost:5000/posts", {
      postId: id,
    });
  } catch (err) {
    console.log(err);
  }
};

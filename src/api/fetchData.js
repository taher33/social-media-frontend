import axios from "axios";
export const fetchUsers = async () => {
  const data = await axios.get("http://localhost:5000/signup");
  return data.data;
};

export const fetchPPosts = async () => {
  const { data } = await axios.get("http://localhost:5000/profile");
  return data;
};

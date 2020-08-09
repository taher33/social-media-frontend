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
export const fetchPPosts = async () => {
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTJkZjc3N2NiMTBhMWI5MDliMjE2NCIsImlhdCI6MTU5NjEyNzc3MywiZXhwIjoxNjAzOTAzNzczfQ.dj4fmV8Fgp1oHVDZnuizvn2dCqNwZ8_Am1hWHkkfqvU",
    },
  };
  const {
    data: { posts },
  } = await axios.get("http://localhost:5000/posts", config);
  return posts;
};

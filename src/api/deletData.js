import axios from "axios";
export const deleteUsers = async (id) => {
  try {
    const result = await axios.delete(`http://localhost:5000/signup/${id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
};

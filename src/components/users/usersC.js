import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../api/fetchData";
import { deleteUsers } from "../../api/deletData";
export default function UsersC() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const user = await fetchUsers();
    setUsers(user);
  };
  useEffect(() => {
    getUsers();
    console.log("rendered");
  }, []);
  console.log(users);

  const handleClick = (e) => {
    deleteUsers(e.target.id).then((res) => {
      console.log(res);
    });
    const updatedUsers = users.filter((el) => {
      if (el._id === e.target.id) return false;
      return true;
    });
    setUsers(updatedUsers);
  };

  return users.length === 0 ? (
    <div>loading</div>
  ) : (
    <div>
      {users.map((el, index) => {
        return (
          <div key={el._id}>
            <h2>hello to my {el.name} </h2>{" "}
            <button type="button" id={el._id} onClick={handleClick}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

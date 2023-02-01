import React from "react";
import UserItem from "../UserItem/UserItem";
import { useEffect, useState } from "react";

export default function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://reqres.in/api/users");
      const data = await resp.json();
      const newData = data.data;
      const newArray = newData.map(
        ({ id, email, first_name, last_name, avatar }) => ({
          id,
          email,
          first_name,
          last_name,
          avatar,
        })
      );
      setUsers(newArray);
    })();
  }, []);

  const deleteUser = (delId) => {
    setUsers(users.filter((user) => user.id !== delId));
  };

  return (
    <div>
      <div className="container">
        {users.map((user) => (
          <UserItem key={user.id} {...user} deleteUser={deleteUser} />
        ))}
      </div>
      <div>Count: {users.length}</div>
    </div>
  );
}

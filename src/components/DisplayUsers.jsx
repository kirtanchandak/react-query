import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

function DisplayUsers() {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <div>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button onClick={() => deleteUser(id)}>delete</button>
          </li>
        );
      })}
    </div>
  );
}

export default DisplayUsers;

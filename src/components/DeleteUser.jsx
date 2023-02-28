import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/userSlice";

function DeleteUser() {
  const deleteUsers = () => {
    dispatch(clearAllUsers());
  };
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => deleteUsers()}>Delete All Users</button>
    </div>
  );
}

export default DeleteUser;

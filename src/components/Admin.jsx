import React from "react";
import DeleteUser from "./DeleteUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import DisplayUsers from "./DisplayUsers";

function Admin() {
  const dispatch = useDispatch();
  const addNewUser = (name) => {
    dispatch(addUser(name));
  };
  return (
    <div>
      <div>
        <h1>List of User Details</h1>
        <button onClick={() => addNewUser(fakeUserData())}>
          Add New Users
        </button>
        <ul>
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteUser />
      </div>
    </div>
  );
}

export default Admin;

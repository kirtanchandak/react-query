import React from "react";
import DeleteUser from "./DeleteUser";

function Admin() {
  return (
    <div>
      <div>
        <h1>List of User Details</h1>
        <button>Add New Users</button>
        <ul>
          <li>Hi</li>
          <li>Hello</li>
        </ul>
        <hr />
        <DeleteUser />
      </div>
    </div>
  );
}

export default Admin;

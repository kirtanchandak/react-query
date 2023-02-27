import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    deleteUser(state, action) {},
    clearAllUsers(state, action) {},
  },
});

export default userSlice;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {},
    clearAllUsers(state, action) {},
  },
});

export default userSlice;
export const { addUser } = userSlice.actions;

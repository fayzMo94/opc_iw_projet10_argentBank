import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    removeUser: (state) => {
      state.userData = {};
    },
    updateUsername: (state, action) => {
      state.userData.userName = action.payload;
    }
  },
});

export const { setUser, removeUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;

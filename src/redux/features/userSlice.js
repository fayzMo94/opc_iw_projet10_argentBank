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
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

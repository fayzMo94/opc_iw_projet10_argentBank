import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isConnected: false,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.isConnected = true;
      token = action.payload;
    },
    logout: (state) => {
      state.isConnected = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

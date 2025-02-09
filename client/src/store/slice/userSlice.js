import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || { userData: null, token: null },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.userData = null;
      state.token = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

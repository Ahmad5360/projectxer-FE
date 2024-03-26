import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("token"))
        : null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    signup: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    // updateUser: (state, action) => {
    //  const user = JSON.parse(localStorage.getItem("user"))
    // //  console.log(user)
    //   state.user = {...user, data:action.payload};
    //   localStorage.setItem("user", JSON.stringify({
    //     ...user, data:action.payload
    //   }));
    // },
  },
});

export const { login, signup, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;

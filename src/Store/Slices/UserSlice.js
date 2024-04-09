import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  access_token: null,
  googleAuth: false,
  image: null,
  email:null,
  isLoggedIn: false,
  role: null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      const { username, access_token, googleAuth, image, role,email } =
        action.payload;
      state.username = username;
      state.access_token = access_token;
      state.googleAuth = googleAuth;
      state.email=email;
      state.image = image;
      state.isLoggedIn = true;
      state.role = role;
    },

    logOutUser: (state) => {
      state.username = null;
      state.access_token = null;
      state.googleAuth = false;
      state.image = null;
      state.isLoggedIn = false;
      state.role = "user";
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;

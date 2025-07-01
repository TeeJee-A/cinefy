import type { UserInfo, ProfileInfo } from "@/types/user-info";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserInfo = {
  userid: "",
  role: "user",
  token: "",
  firstname: "",
  lastname: "",
  nickname: "",
  email: "",
  isAuthenticated: false,
  image: null,
  bio: "",
  oauth: false,
  itsMe: false,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<Omit<UserInfo, "isAuthenticated">>
    ) => {
      state.userid = action.payload.userid;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.image = action.payload.image;
      state.isAuthenticated = true;
      state.bio = action.payload.bio;
      state.oauth = action.payload.oauth;
      state.itsMe = action.payload.itsMe ?? false; // Default to false if not provided
    },
    logoutUser: (state) => {
      state.userid = "";
      state.role = "user";
      state.token = "";
      state.firstname = "";
      state.lastname = "";
      state.nickname = "";
      state.email = "";
      state.image = null;
      state.isAuthenticated = false;
      state.bio = "";
      state.oauth = false;
      state.itsMe = false; // Reset itsMe on logout
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    updateImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    updateProfileInfo: (state, action: PayloadAction<ProfileInfo>) => {
      const { firstname, lastname, nickname, email } = action.payload;
      state.firstname = firstname;
      state.lastname = lastname;
      state.nickname = nickname;
      state.email = email;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  updateBio,
  updateImage,
  updateProfileInfo,
} = userInfoSlice.actions;
export default userInfoSlice.reducer;

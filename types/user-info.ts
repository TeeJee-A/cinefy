export type ProfileInfo = {
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
};

export type UserInfo = {
  userid: string;
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
  role: "user" | "admin";
  token: string;
  isAuthenticated: boolean; // true if the user is logged in, false if not
  image: string | null;
  bio: string;
  oauth: boolean; // true if the user logged in with OAuth (Google, Facebook, etc.), false if the user logged in with email and password
  itsMe: boolean; // true if the user is viewing their own profile, false if viewing another user's profile
};

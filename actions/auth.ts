import {
  email,
  modalState,
} from "@/features/forgot-password/forgot-password-slice";
import { loginUser, logoutUser } from "@/features/user/user-info-slice";
import {
  ForgotPasswordSchema,
  LoginFormSchema,
  OtpFormSchema,
  ResetPasswordSchema,
  SignupFormSchema,
} from "@/lib/definitions";
import { isEmail } from "@/lib/utils";
import { UserInfo } from "@/types/user-info";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { z } from "zod";

export async function register(
  values: z.infer<typeof SignupFormSchema>,
  onSuccess: () => void
) {
  console.log("Form data is valid, creating user...", values);
  onSuccess();
  // Call the provider or db to create a user...
}

export async function login(
  values: z.infer<typeof LoginFormSchema>,
  onSuccess: () => void,
  dispatch: Dispatch<UnknownAction>
) {
  const user_info: UserInfo = {
    // Mock user data from the server
    userid: "1",
    firstname: "John",
    lastname: "Doe",
    nickname: "johndoe",
    email: "johndoe@gmail.com",
    role: "user",
    token: "1234567890",
    isAuthenticated: true, // Assuming the user is authenticated after login
    image: "https://github.com/shadcn.png",
    bio: "hello world from the other side, i am the other side",
    oauth: false, // Assuming this is a local login, not OAuth
    itsMe: true, // Assuming this is the user's own profile
  };
  if (isEmail(values.identifier)) {
    console.log("Logging in with email...");
    if (user_info) {
      dispatch(loginUser(user_info));
    }
  } else {
    console.log("Logging in with nickname...");
    if (user_info) {
      dispatch(loginUser(user_info));
    }
  }
  onSuccess();
}

export async function logout(
  onSuccess: () => void,
  dispatch: Dispatch<UnknownAction>
) {
  console.log("Logging out user...");
  dispatch(logoutUser());
  onSuccess();
}

export async function resendCode(
  values: z.infer<typeof ForgotPasswordSchema>,
  dispatch: Dispatch<UnknownAction>
) {
  forgotPassword(values, dispatch);
}

export async function forgotPassword(
  values: z.infer<typeof ForgotPasswordSchema>,
  dispatch: Dispatch<UnknownAction>
) {
  console.log("Form data is valid, sending reset link...", values);
  dispatch(modalState("verify"));
  dispatch(email(values.email));
  // Call the provider or db to send a reset link...
}

export async function verifyEmail(
  values: z.infer<typeof OtpFormSchema>,
  dispatch: Dispatch<UnknownAction>
) {
  console.log("Form data is valid, verifying email...", values);
  dispatch(modalState("reset"));
}

export async function resetPassword(
  values: z.infer<typeof ResetPasswordSchema>,
  dispatch: Dispatch<UnknownAction>
) {
  console.log("Form data is valid, resetting password...", values);
  dispatch(modalState(""));
  // Call the provider or db to reset a password...
}

export async function googleAuth() {
  console.log("Logging in with Google...");

  // Call the provider or db to log in with Google...
}
export async function intraAuth() {
  console.log("Logging in with Intra...");

  // Call the provider or db to log in with Intra...
}

export async function rememberMe() {
  console.log("Remember me...");
}

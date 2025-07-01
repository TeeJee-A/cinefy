import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface ForgotPassword {
  state: string;
  email: string;
}

const initialState: ForgotPassword = {
  state: '',
  email: '',
};

export const forgotPasswordSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    modalState: (state, name: PayloadAction<string>) => {
      state.state = name.payload;
    },
    email: (state, email: PayloadAction<string>) => {
      state.email = email.payload;
    },
  },
});

export const { modalState, email } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;

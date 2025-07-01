import { moviesApi } from '@/features/api/api-slice';
import forgotPasswordReducer from '@/features/forgot-password/forgot-password-slice';
import userInfo from '@/features/user/user-info-slice';
import genresReducer from '@/features/genres/genres-clice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    state: forgotPasswordReducer,
    email: forgotPasswordReducer,
    userInfo: userInfo,
    genresData: genresReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

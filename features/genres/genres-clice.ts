import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GenreListResponse, genres } from '../api/api-slice';

const initialState: GenreListResponse = {
  genres: [],
  tvGenres: [],
  movieGenres: [],
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    genresData: (state, action: PayloadAction<genres[]>) => {
      state.genres = action.payload;
    },
    tvGenresData: (state, action: PayloadAction<genres[]>) => {
      state.genres = action.payload;
    },
    movieGenresData: (state, action: PayloadAction<genres[]>) => {
      state.genres = action.payload;
    },
  },
});

export const { genresData, tvGenresData, movieGenresData } = genresSlice.actions;
export default genresSlice.reducer;

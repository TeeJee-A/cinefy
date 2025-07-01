import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview?: string;
  genre_ids: number[];
  media_type: string;
  vote_average: number;
}

export interface PaginatedMoviesResponse {
  results: Movie[];
  hasMore: boolean;
  currentPage?: number;
  totalItems?: number;
}

export interface GenreListResponse {
  genres: genres[];
  tvGenres?: genres[];
  movieGenres?: genres[];
}

export interface genres {
  id: number;
  name: string;
}

export const MOVIE_POSTER_BASE_URL = "https://image.tmdb.org/t/p/w200";
const API = "https://api.themoviedb.org/3";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmE1MWZhMjEzMDg1MDZiMmU0MzRkOWVhMWMwNzg3MiIsIm5iZiI6MTc0MzY4NjcxNS44MDgsInN1YiI6IjY3ZWU4YzNiOWM2ODUwNGNmMjYyYTA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eqKD78Whp_FhvwBNJR5MteWUeUn8DoiCoZuof0PCT-g`
      );
      return headers;
    },
  }),

  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    //All data
    getMovies: builder.query<
      PaginatedMoviesResponse,
      { page: number; genre: string }
    >({
      query: ({ page, genre }) =>
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newMoviesResponse, { arg }) => {
        if (arg.page === 1 || !currentCache.results) {
          return newMoviesResponse;
        }
        currentCache.results.push(...newMoviesResponse.results);
        if (newMoviesResponse.results.length === 0) {
          currentCache.hasMore = false;
        } else {
          currentCache.hasMore = true;
        }
        if (newMoviesResponse.currentPage) {
          currentCache.currentPage = newMoviesResponse.currentPage;
        }
        return currentCache;
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.page !== previousArg?.page ||
          currentArg?.genre !== previousArg?.genre
        );
      },
    }),
    getTvShows: builder.query<
      PaginatedMoviesResponse,
      { page: number; genre: string }
    >({
      query: ({ page, genre }) =>
        `/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newMoviesResponse, { arg }) => {
        if (arg.page === 1 || !currentCache.results) {
          return newMoviesResponse;
        }
        currentCache.results.push(...newMoviesResponse.results);
        if (newMoviesResponse.results.length === 0) {
          currentCache.hasMore = false;
        } else {
          currentCache.hasMore = true;
        }
        if (newMoviesResponse.currentPage) {
          currentCache.currentPage = newMoviesResponse.currentPage;
        }
        return currentCache;
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.page !== previousArg?.page ||
          currentArg?.genre !== previousArg?.genre
        );
      },
    }),

    //All page
    getAllTrending: builder.query<PaginatedMoviesResponse, {}>({
      query: () => `/trending/all/week?language=en-US`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getTvTrending: builder.query<PaginatedMoviesResponse, {}>({
      query: () => `/trending/tv/week?language=en-US`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getMovieTrending: builder.query<PaginatedMoviesResponse, {}>({
      query: () => `/trending/movie/week?language=en-US`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getTvPopular: builder.query<PaginatedMoviesResponse, {}>({
      query: () => `/tv/popular?language=en-US&page=1`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getMoviePopular: builder.query<PaginatedMoviesResponse, {}>({
      query: () => `/movie/popular?language=en-US&page=1`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getTvTopRated: builder.query<PaginatedMoviesResponse, {}>({
      query: () => `/tv/top_rated?language=en-US&page=1`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getMovieTopRated: builder.query<PaginatedMoviesResponse, {}>({
      query: () => `/movie/top_rated?language=en-US&page=1`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),

    // Genres
    getTvGenreList: builder.query<GenreListResponse, {}>({
      query: () => `/genre/tv/list?language=en`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),
    getMovieGenreList: builder.query<GenreListResponse, {}>({
      query: () => `/genre/movie/list?language=en`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
    }),

    // Favorites
    addToFavorites: builder.mutation<
      void,
      { mediaId: number; mediaType: string }
    >({
      query: ({ mediaId, mediaType }) => ({
        url: `/account/21924333/favorite?language=en-US`,
        method: "POST",
        body: {
          media_type: mediaType,
          media_id: mediaId,
          favorite: true,
        },
      }),
    }),
    removeFromFavorites: builder.mutation<
      void,
      { mediaId: number; mediaType: string }
    >({
      query: ({ mediaId, mediaType }) => ({
        url: `/account/21924333/favorite?language=en-US`,
        method: "POST",
        body: {
          media_type: mediaType,
          media_id: mediaId,
          favorite: false,
        },
      }),
    }),
    getMovieFavorites: builder.query<PaginatedMoviesResponse, { page: number }>(
      {
        query: ({ page }) =>
          `/account/21924333/favorite/movies?language=en-US&sort_by=created_at.asc&page=${page}`,
        serializeQueryArgs: ({ endpointName }) => {
          return endpointName;
        },
        merge: (currentCache, newMoviesResponse, { arg }) => {
          if (arg.page === 1 || !currentCache.results) {
            return newMoviesResponse;
          }
          currentCache.results.push(...newMoviesResponse.results);
          if (newMoviesResponse.results.length === 0) {
            currentCache.hasMore = false;
          } else {
            currentCache.hasMore = true;
          }
          if (newMoviesResponse.currentPage) {
            currentCache.currentPage = newMoviesResponse.currentPage;
          }
          return currentCache;
        },
        forceRefetch: ({ currentArg, previousArg }) => {
          return currentArg?.page !== previousArg?.page;
        },
      }
    ),
    getTvShowFavorites: builder.query<
      PaginatedMoviesResponse,
      { page: number }
    >({
      query: ({ page }) =>
        `/account/21924333/favorite/tv?language=en-US&sort_by=created_at.asc&page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newMoviesResponse, { arg }) => {
        if (arg.page === 1 || !currentCache.results) {
          return newMoviesResponse;
        }
        currentCache.results.push(...newMoviesResponse.results);
        if (newMoviesResponse.results.length === 0) {
          currentCache.hasMore = false;
        } else {
          currentCache.hasMore = true;
        }
        if (newMoviesResponse.currentPage) {
          currentCache.currentPage = newMoviesResponse.currentPage;
        }
        return currentCache;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page;
      },
    }),

    //search
    searchMulti: builder.query<
      PaginatedMoviesResponse,
      { query: string; page: number }
    >({
      query: ({ query, page }) =>
        `/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`,
      serializeQueryArgs: ({ queryArgs, endpointName }) => {
        return `${endpointName}-${queryArgs.query}`;
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return (
          currentArg?.query !== previousArg?.query ||
          currentArg?.page !== previousArg?.page
        );
      },
      merge: (currentCache, newMoviesResponse, { arg }) => {
        if (arg.page === 1 || !currentCache.results) {
          return newMoviesResponse;
        }
        currentCache.results.push(...newMoviesResponse.results);
        if (newMoviesResponse.results.length === 0) {
          currentCache.hasMore = false;
        } else {
          currentCache.hasMore = true;
        }
        if (newMoviesResponse.currentPage) {
          currentCache.currentPage = newMoviesResponse.currentPage;
        }
        return currentCache;
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetTvShowsQuery,
  useGetAllTrendingQuery,
  useGetTvTrendingQuery,
  useGetMovieTrendingQuery,
  useGetTvPopularQuery,
  useGetMoviePopularQuery,
  useGetMovieTopRatedQuery,
  useGetTvTopRatedQuery,
  useGetMovieGenreListQuery,
  useGetTvGenreListQuery,
  useGetMovieFavoritesQuery,
  useGetTvShowFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
  useSearchMultiQuery,
} = moviesApi;

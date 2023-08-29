import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FILTER_PARAMS, IGame, IGameDetails } from "../../types/types";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        process.env.REACT_APP_RAPIDAPI_KEY as string
      );
    },
  }),
  endpoints: (build) => ({
    getGameById: build.query<IGameDetails, number>({
      query: (id) => ({
        url: "/game",
        params: {
          id,
        },
      }),
    }),
    getGames: build.query<IGame[], FILTER_PARAMS>({
      query: (filters) => ({
        url: "/games",
        params: {
          platform: filters.platform,
          category: filters.category,
          "sort-by": filters["sort-by"],
        },
      }),
    }),
  }),
});

export const { useGetGameByIdQuery, useGetGamesQuery } = gamesApi;

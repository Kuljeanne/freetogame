import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

import { FILTER_PARAMS, IGame, IGameDetails } from "../../types/types";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: process.env.REACT_APP_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set(
          "X-RapidAPI-Key",
          process.env.REACT_APP_RAPIDAPI_KEY as string
        );
      },
    }),
    {
      maxRetries: 3,
    }
  ),
  keepUnusedDataFor: 300,
  endpoints: (build) => ({
    getGamesList: build.query<IGame[], FILTER_PARAMS>({
      query: (params: FILTER_PARAMS) => ({
        url: "/games",
        params,
      }),
    }),
    getGameById: build.query<IGameDetails, number>({
      query: (id) => ({
        url: "/game",
        params: {
          id,
        },
      }),
    }),
  }),
});

export const { useGetGameByIdQuery, useGetGamesListQuery } = gamesApi;

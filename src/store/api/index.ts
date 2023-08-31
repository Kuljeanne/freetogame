import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

import { FILTER_PARAMS, IGame, IGameDetails } from "../../types/types";

const BASE_URL = 'http://localhost:3000/api'

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: BASE_URL,
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
        url: `/game/${id}`,
      }),
    }),
  }),
});

export const { useGetGameByIdQuery, useGetGamesListQuery, useLazyGetGameByIdQuery } = gamesApi;

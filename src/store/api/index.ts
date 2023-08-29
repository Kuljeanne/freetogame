import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IGame, IGameDetails } from "../../types/types";

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
    getGamesList: build.query<IGame[], void>({
      query: () => ({
        url: "/games",
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
    // getGamesFiltered: build.query<IGameDetails, any>({
    //   query: () => ({
    //     url: "/games",
    //     params: {
    //       platform='',
    //       category='',
    //       ['sort-by']
    //     },
    //   }),
    // }),
  }),
});

export const { useGetGamesListQuery, useGetGameByIdQuery } = gamesApi;

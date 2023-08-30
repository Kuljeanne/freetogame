import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IGameDetails } from "../../types/types";

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
  keepUnusedDataFor: 300,
  endpoints: (build) => ({
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

export const { useGetGameByIdQuery } = gamesApi;

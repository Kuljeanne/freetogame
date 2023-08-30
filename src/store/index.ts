import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "./reducers/GamesSlice";
import { gamesApi } from "./api";
export const store = configureStore({
  reducer: {
    games: gamesReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

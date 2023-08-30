import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "./reducers/GamesSlice";
import gameDetailsReducer from "./reducers/GameDetailsSlice";
export const store = configureStore({
  reducer: {
    games: gamesReducer,
    game: gameDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";

import { gamesApi } from "./api";
import FiltersReducer from "./reducers/Filters.Slice";
export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    filters: FiltersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

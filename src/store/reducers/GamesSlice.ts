import { createSlice } from "@reduxjs/toolkit";

import { IGame } from "../../types/types.js";

import { fetchGames } from "./ActionCreators.ts";

const initialState = {
  isLoading: false,
  error: "",
  gamesList: [] as IGame[],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gamesList = action.payload as IGame[];
      state.error = "";
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
  },
});

export default gamesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { IGameDetails } from "../../types/types.js";

import { fetchGameById } from "./ActionCreators.ts";

const initialState = {
  isLoading: false,
  error: "",
  gameDetails: null as IGameDetails | null,
};

const gameDetailsSlice = createSlice({
  name: "gameDeatils",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGameById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGameById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gameDetails = action.payload as IGameDetails;
      state.error = "";
    });
    builder.addCase(fetchGameById.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading= false
    });
  },
});

export default gameDetailsSlice.reducer;

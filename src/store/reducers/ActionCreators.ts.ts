import { createAsyncThunk } from "@reduxjs/toolkit";

import { FILTER_PARAMS, IGame, IGameDetails } from "../../types/types";
import axios from "../../axios";

export const fetchGames = createAsyncThunk(
  "games/fetchingList",
  async (params: FILTER_PARAMS, { rejectWithValue }) => {
    try {
      const res = await axios.get<IGame[]>("/games", { params });
      return res.data;
    } catch (error) {
      return rejectWithValue("Failed to load games' list");
    }
  }
);

export const fetchGameById = createAsyncThunk(
  "games/fetchingLGameById",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await axios.get<IGameDetails>("/game", {
        params: { id },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue("Failed to load game's details");
    }
  }
);

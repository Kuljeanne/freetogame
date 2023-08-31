import { createSlice } from "@reduxjs/toolkit";

import { FILTER_PARAMS } from "../../types/types";
import { PLATFORMS, SORT } from "../../types/enum";

const initialState: FILTER_PARAMS = {
  platform: PLATFORMS["All Platforms"],
  "sort-by": SORT.Relevance,
};

const filtersSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setPlatform(state, action) {
      state.platform = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state["sort-by"] = action.payload;
    },
  },
});

export const { setCategory, setPlatform, setSort } = filtersSlice.actions;
export default filtersSlice.reducer;

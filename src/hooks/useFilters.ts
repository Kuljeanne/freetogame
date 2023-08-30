import { useState } from "react";

import { FILTER_PARAMS } from "../types/types";
import { useGetGamesListQuery } from "../store/api";

export const useFiltersToFetch = (initial: FILTER_PARAMS) => {
  const [filters, setNewFilters] = useState(initial);
  const { data, isLoading, isError } = useGetGamesListQuery(filters);
  return { data, isLoading, isError, setNewFilters };
};

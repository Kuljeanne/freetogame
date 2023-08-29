import React, { useState } from "react";
import cn from "classnames";

import Filter from "../../components/Filter";
import { FILTER_PARAMS } from "../../types/types";
import { useGetGamesListQuery } from "../../store/api";
import { PLATFORMS, SORT, TAGS } from "../../types/enum";
import PaginatedList from "../../components/PaginatedList";

import styles from "./Main.module.css";

export const Main = () => {
  const { data, isLoading } = useGetGamesListQuery();

  const initialFilters: FILTER_PARAMS = {
    platform: PLATFORMS["All Platforms"],
    category: TAGS["All Genres"],
    "sort-by": SORT.Relevance,
  };
  const [filters, setFilters] = useState(initialFilters);

  const handlePlatformChange = (value: string) => {
    setFilters({ ...filters, platform: value });
  };

  const handleGenreChange = (value: string) => {
    setFilters({ ...filters, category: value });
  };

  const handleSortChange = (value: string) => {
    setFilters({ ...filters, "sort-by": value });
  };

  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.filters}>
        <Filter
          type="Browse"
          filterName="Platform"
          options={PLATFORMS}
          defaultValue={initialFilters.platform}
          onChange={handlePlatformChange}
        />
        <Filter
          type="Browse"
          filterName="Genre/Tag"
          options={TAGS}
          defaultValue={initialFilters.category}
          onChange={handleGenreChange}
        />
        <Filter
          type="Sort"
          filterName="Sort By"
          options={SORT}
          defaultValue={initialFilters["sort-by"]}
          onChange={handleSortChange}
        />
      </div>
      {data && <PaginatedList data={data} />}
    </div>
  );
};

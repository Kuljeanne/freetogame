import React from "react";
import cn from "classnames";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";

import Filter from "../../components/Filter";
import { PLATFORMS, SORT, TAGS } from "../../types/enum";
import PaginatedList from "../../components/PaginatedList";
import ErrorBlock from "../../components/ErrorBlock";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useFiltersToFetch } from "../../hooks/useFilters";
import {
  setCategory,
  setPlatform,
  setSort,
} from "../../store/reducers/Filters.Slice";

import styles from "./Main.module.css";

export const Main = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.filters);
  const { data, isLoading, isError, setNewFilters } =
    useFiltersToFetch(filters);

  const handlePlatformChange = (value: string) => {
    const newFilters = { ...filters, platform: value };
    dispatch(setPlatform(value));
    setNewFilters(newFilters);
  };

  const handleGenreChange = (value: string) => {
    const newFilters = { ...filters, category: value };
    dispatch(setCategory(value));
    setNewFilters(newFilters);
  };

  const handleSortChange = (value: string) => {
    const newFilters = { ...filters, "sort-by": value };
    dispatch(setSort(value));
    setNewFilters(newFilters);
  };

  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.filters}>
        <Filter
          type="Browse"
          filterName="Platform"
          options={PLATFORMS}
          defaultValue={filters.platform as string}
          loading={isLoading}
          disabled={isLoading || isError}
          onChange={handlePlatformChange}
        />
        <Filter
          type="Browse"
          filterName="Genre/Tag"
          options={TAGS}
          defaultValue={filters.category || "All genres"}
          loading={isLoading}
          disabled={isLoading || isError}
          onChange={handleGenreChange}
        />
        <Filter
          type="Sort"
          filterName="Sort By"
          options={SORT}
          defaultValue={filters["sort-by"] as string}
          loading={isLoading}
          disabled={isLoading || isError}
          onChange={handleSortChange}
        />
      </div>
      {isLoading && (
        <div className={styles.skeletons}>
          {Array(8)
            .fill(null)
            .map((load, i) => (
              <Skeleton.Node
                key={i}
                style={{ width: "260px", height: "280px" }}
                active
              >
                <DotChartOutlined style={{ fontSize: 60 }} />
              </Skeleton.Node>
            ))}
        </div>
      )}
      {isError && <ErrorBlock />}
      {!isError && data && <PaginatedList data={data} />}
    </div>
  );
};

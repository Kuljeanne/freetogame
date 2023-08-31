import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";

import Filter from "../../components/Filter";
import { PLATFORMS, SORT, TAGS } from "../../types/enum";
import PaginatedList from "../../components/PaginatedList";
import ErrorBlock from "../../components/ErrorBlock";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  setCategory,
  setPlatform,
  setSort
} from "../../store/reducers/Filters.Slice";
import { useLazyGetGamesListQuery } from "../../store/api";
import { IGame } from "../../types/types";

import styles from "./Main.module.css";

export const Main = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.filters);
  const [data, setData] = useState<IGame[] | null>(null);
  const [trigger, { isError, isLoading }] = useLazyGetGamesListQuery();

  const handlePlatformChange = (value: string) => {
    dispatch(setPlatform(value));
  };

  const handleGenreChange = (value: string) => {
    dispatch(setCategory(value));
  };

  const handleSortChange = (value: string) => {
    dispatch(setSort(value));
  };

  useEffect(() => {
    trigger(filters)
      .unwrap()
      .then((games) => setData(games));
      return ()=> trigger(filters).abort()
  }, [filters, trigger]);

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

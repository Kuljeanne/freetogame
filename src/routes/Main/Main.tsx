import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";

import Filter from "../../components/Filter";
import { FILTER_PARAMS } from "../../types/types";
import { PLATFORMS, SORT, TAGS } from "../../types/enum";
import PaginatedList from "../../components/PaginatedList";
import ErrorBlock from "../../components/ErrorBlock";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchGames } from "../../store/reducers/ActionCreators.ts";

import styles from "./Main.module.css";

export const Main = () => {
  const dispatch = useAppDispatch();
  const { error, gamesList, isLoading } = useAppSelector(
    (state) => state.games
  );

  const initialFilters: FILTER_PARAMS = {
    platform: PLATFORMS["All Platforms"],
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

  useEffect(() => {
    dispatch(fetchGames(filters));
  }, [dispatch, filters]);

  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.filters}>
        <Filter
          type="Browse"
          filterName="Platform"
          options={PLATFORMS}
          defaultValue={initialFilters.platform as string}
          loading={isLoading}
          disabled={isLoading || Boolean(error)}
          onChange={handlePlatformChange}
        />
        <Filter
          type="Browse"
          filterName="Genre/Tag"
          options={TAGS}
          defaultValue={"All genres"}
          loading={isLoading}
          disabled={isLoading || Boolean(error)}
          onChange={handleGenreChange}
        />
        <Filter
          type="Sort"
          filterName="Sort By"
          options={SORT}
          defaultValue={initialFilters["sort-by"] as string}
          loading={isLoading}
          disabled={isLoading || Boolean(error)}
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
      {error && <ErrorBlock message={error} />}
      {gamesList && <PaginatedList data={gamesList} />}
    </div>
  );
};

import React, { useState } from "react";
import cn from "classnames";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";

import Filter from "../../components/Filter";
import { FILTER_PARAMS } from "../../types/types";
import { PLATFORMS, SORT, TAGS } from "../../types/enum";
import PaginatedList from "../../components/PaginatedList";
import { useFiltersToFetch } from "../../hooks/useFilters";
import ErrorBlock from "../../components/ErrorBlock";

import styles from "./Main.module.css";

export const Main = () => {
  const initialFilters: FILTER_PARAMS = {
    platform: PLATFORMS["All Platforms"],
    "sort-by": SORT.Relevance,
  };
  const [filters, setFilters] = useState(initialFilters);
  const { data, isLoading, isError, setNewFilters } = useFiltersToFetch({});

  const handlePlatformChange = (value: string) => {
    setFilters({ ...filters, platform: value });
    setNewFilters({ ...filters, platform: value });
  };

  const handleGenreChange = (value: string) => {
    setFilters({ ...filters, category: value });
    setNewFilters({ ...filters, category: value });
  };

  const handleSortChange = (value: string) => {
    setFilters({ ...filters, "sort-by": value });
    setNewFilters({ ...filters, "sort-by": value });
  };

  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.filters}>
        <Filter
          type="Browse"
          filterName="Platform"
          options={PLATFORMS}
          defaultValue={initialFilters.platform as string}
          loading={isLoading}
          onChange={handlePlatformChange}
        />
        <Filter
          type="Browse"
          filterName="Genre/Tag"
          options={TAGS}
          defaultValue={"All genres"}
          loading={isLoading}
          onChange={handleGenreChange}
        />
        <Filter
          type="Sort"
          filterName="Sort By"
          options={SORT}
          defaultValue={initialFilters["sort-by"] as string}
          loading={isLoading}
          onChange={handleSortChange}
        />
      </div>
      {isLoading && (
        <div
          style={{
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
      {data && <PaginatedList data={data} />}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Pagination } from "antd";

import GameCard from "../../components/GameCard";
import { datePerse } from "../../utils";
import Filter from "../../components/Filter";
import { FILTER_PARAMS, IGame } from "../../types/types";
import { useGetGamesListQuery } from "../../store/api";
import { PLATFORMS, SORT, TAGS } from "../../types/enum";

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

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [games, setGames] = useState<IGame[]>([]);

  const pageChangeHandler = (page: number, pageSize: number) => {
    setPage(page);
    setPerPage(pageSize);
  };

  useEffect(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    setGames(data?.slice(start, end) || []);
  }, [data, perPage, page]);

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
      {!isLoading && (
        <div className={styles.games}>
          {games.length > 0
            ? games.map(
                ({ id, title, genre, publisher, thumbnail, release_date }) => (
                  <GameCard
                    key={id}
                    id={id}
                    title={title}
                    genre={genre}
                    imgSrc={thumbnail}
                    publisher={publisher}
                    releaseDate={datePerse(release_date)}
                  />
                )
              )
            : null}
        </div>
      )}

      <Pagination
        responsive
        hideOnSinglePage
        onChange={pageChangeHandler}
        className={styles.pagination}
        pageSizeOptions={[12, 20, 28, 36, 44]}
        defaultPageSize={perPage}
        defaultCurrent={page}
        total={data?.length}
      />
    </div>
  );
};

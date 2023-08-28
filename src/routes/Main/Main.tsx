import React, { useState } from "react";
import cn from "classnames";

import GameCard from "../../components/GameCard";
import { datePerse } from "../../utils";
import Filter from "../../components/Filter";

import styles from "./Main.module.css";
import { GAMES, GENRES, PLATFORMS, SORT } from "./mockdata";

const defaultValues = {
  platform: "All Platforms",
  genre: "All Genres",
  sort: "Relevance",
};

export const Main = () => {
  const [filters, setFilters] = useState(defaultValues);

  const handlePlatformChange = (value: string) => {
    setFilters({ ...filters, platform: value });
  };

  const handleGenreChange = (value: string) => {
    setFilters({ ...filters, genre: value });
  };

  const handleSortChange = (value: string) => {
    setFilters({ ...filters, sort: value });
  };

  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.filters}>
        <Filter
          type="Browse"
          filterName="Platform"
          options={PLATFORMS}
          defaultValue={defaultValues.platform}
          onChange={handlePlatformChange}
        />
        <Filter
          type="Browse"
          filterName="Genre/Tag"
          options={GENRES}
          defaultValue={defaultValues.genre}
          onChange={handleGenreChange}
        />
        <Filter
          type="Sort"
          filterName="Sort By"
          options={SORT}
          defaultValue={defaultValues.sort}
          onChange={handleSortChange}
        />
      </div>
      <div className={styles.games}>
        {GAMES.length > 0
          ? GAMES.map(
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
    </div>
  );
};

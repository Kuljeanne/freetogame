import React from "react";
import cn from "classnames";

import GameCard from "../../components/GameCard";
import { datePerse } from "../../utils";
import Filter from "../../components/Filter";

import styles from "./Main.module.css";
import { GAMES, GENRES, PLATFORMS, SORT } from "./mockdata";

export const Main = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.filters}>
        <Filter
          type="Browse"
          filterName="Platform"
          options={PLATFORMS}
          defaultValue="All Platforms"
          onChange={handleChange}
        />
        <Filter
          type="Browse"
          filterName="Genre/Tag"
          options={GENRES}
          defaultValue="All Genres"
          onChange={handleChange}
        />
        <Filter
          type="Sort"
          filterName="Sort By"
          options={SORT}
          defaultValue="Relevance"
          onChange={handleChange}
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

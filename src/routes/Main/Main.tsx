import React from "react";
import cn from "classnames";

import GameCard from "../../components/GameCard";
import { datePerse } from "../../utils";

import styles from "./Main.module.css";
import { GAMES } from "./mockdata";

export const Main = () => {
  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.filters}></div>
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

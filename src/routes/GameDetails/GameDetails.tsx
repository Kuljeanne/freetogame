import React, { useEffect } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import GameInfo from "../../components/GameInfo";

import styles from "./GameDetails.module.css";
import { GAME } from "./mockdata";

export const GameDetails = () => {
  const {
    id,
    title,
    thumbnail,
    game_url,
    short_description,
    description,
    screenshots,
    developer,
    publisher,
    release_date,
    genre,
    minimum_system_requirements,
    platform,
  } = GAME;
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={cn(styles.container, "wrapper")}>
        <GameInfo
          id={id}
          title={title}
          thumbnail={thumbnail}
          game_url={game_url}
          short_description={short_description}
          description={description}
          screenshots={screenshots}
          developer={developer}
          publisher={publisher}
          release_date={release_date}
          genre={genre}
          minimum_system_requirements={minimum_system_requirements}
          platform={platform}
          onClick={handleBackBtn}
        />
      </div>
      <Footer />
    </>
  );
};

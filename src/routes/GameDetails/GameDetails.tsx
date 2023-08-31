import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "antd";

import GameInfo from "../../components/GameInfo";
import ErrorBlock from "../../components/ErrorBlock";
import { useLazyGetGameByIdQuery } from "../../store/api";
import { IGameDetails } from "../../types/types";

import styles from "./GameDetails.module.css";

export const GameDetails = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState<IGameDetails | null>(null);

  const [trigger, { isLoading, isError }] = useLazyGetGameByIdQuery();

  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate("/games");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    trigger(Number(id)).unwrap().then((data) => setGameDetails(data)
    ).catch(console.log);

    return () => {
      trigger(Number(id)).abort();
    };
  }, [id, trigger]);

  return (
    <div className={cn(styles.container, "wrapper")}>
      {isLoading && (
        <div className={styles.skeletons}>
          <Skeleton.Image active style={{ width: "280px", height: "280px" }} />
          <Skeleton active paragraph={{ rows: 8 }} />
        </div>
      )}
      {isError && <ErrorBlock />}
      {gameDetails && (
        <>
          {gameDetails.screenshots.length > 0 && (
            <div
              className={styles.background}
              style={{ background: `url(${gameDetails.screenshots[0].image})` }}
            >
              <div className={styles.gradient}></div>
            </div>
          )}
          <GameInfo
            id={gameDetails.id}
            title={gameDetails.title}
            thumbnail={gameDetails.thumbnail}
            game_url={gameDetails.game_url}
            short_description={gameDetails.short_description}
            description={gameDetails.description}
            screenshots={gameDetails.screenshots}
            developer={gameDetails.developer}
            publisher={gameDetails.publisher}
            release_date={gameDetails.release_date}
            genre={gameDetails.genre}
            minimum_system_requirements={
              gameDetails.minimum_system_requirements
            }
            platform={gameDetails.platform}
            onClick={handleBackBtn}
          />
        </>
      )}
    </div>
  );
};

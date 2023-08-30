import React, { useEffect } from "react";
import cn from "classnames";
import { useNavigate, useParams } from "react-router-dom";

import GameInfo from "../../components/GameInfo";
import ErrorBlock from "../../components/ErrorBlock";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchGameById } from "../../store/reducers/ActionCreators.ts";

import styles from "./GameDetails.module.css";

export const GameDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { gameDetails, error, isLoading } = useAppSelector(
    (state) => state.game
  );

  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchGameById(Number(id)));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <div className={cn(styles.container, "wrapper")}>
      {isLoading && "идет загрузка"}
      {error && <ErrorBlock message={error} />}
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

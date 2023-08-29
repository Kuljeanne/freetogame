import React, { useEffect } from "react";
import cn from "classnames";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import GameInfo from "../../components/GameInfo";
import { useGetGameByIdQuery } from "../../store/api";

import styles from "./GameDetails.module.css";

export const GameDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetGameByIdQuery(Number(id));

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
        {isLoading && "идет загрузка"}
        {isError && "ошибка"}
        {data && (
          <>
            <div
              className={styles.background}
              style={{ background: `url(${data.screenshots[0].image})` }}
            >
              <div className={styles.gradient}></div>
            </div>
            <GameInfo
              id={data.id}
              title={data.title}
              thumbnail={data.thumbnail}
              game_url={data.game_url}
              short_description={data.short_description}
              description={data.description}
              screenshots={data.screenshots}
              developer={data.developer}
              publisher={data.publisher}
              release_date={data.release_date}
              genre={data.genre}
              minimum_system_requirements={data.minimum_system_requirements}
              platform={data.platform}
              onClick={handleBackBtn}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

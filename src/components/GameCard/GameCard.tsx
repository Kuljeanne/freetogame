import React from "react";
import { Link } from "react-router-dom";

import styles from "./GameCard.module.css";

type GameCardProps = {
  id:number;
  title: string;
  genre: string;
  imgSrc: string;
  releaseDate: string;
  publisher: string;
};

export const GameCard = ({
  id,
  title,
  genre,
  imgSrc,
  publisher,
  releaseDate,
}: GameCardProps) => {
  return (
    <Link to={`${id}`} className={styles.card}>
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
        className={styles.img}
      />
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.data}>
          Genre: <span>{genre}</span>
        </p>
        <p className={styles.data}>
          Publisher: <span>{publisher}</span>
        </p>
        <p className={styles.data}>
          Realesed: <span>{releaseDate}</span>
        </p>
      </div>
    </Link>
  );
};

import React from "react";
import { Button, Carousel } from "antd";
import { ArrowLeftOutlined, RightCircleOutlined } from "@ant-design/icons";
import cn from "classnames";

import { datePerse } from "../../utils";
import { IGameDetails } from "../../types";

import styles from "./GameInfo.module.css";

interface IGameInfoProps extends IGameDetails {
  onClick: () => void;
}

export const GameInfo = ({
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
  onClick,
}: IGameInfoProps) => {
  return (
    <div className={styles.details}>
      <div className={styles.stickyContainer}>
        <div className={styles.play}>
          <img src={thumbnail} alt={title} />
          <Button
            style={{ boxShadow: "none" }}
            href={game_url}
            target="_blank"
            type="primary"
          >
            PLAY NOW <RightCircleOutlined />
          </Button>
          <Button onClick={onClick} className={styles.btn} type="default">
            <ArrowLeftOutlined />
            Back to the games' list
          </Button>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoBlock}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.short}>{short_description}</p>
        </div>
        <div className={styles.infoBlock}>
          <h4 className={styles.subtitle}>About {title}</h4>
          <p className={styles.desc}>{description}</p>
        </div>
        <div className={styles.infoBlock}>
          <h4 className={styles.subtitle}>{title} Screenshots</h4>
          <Carousel autoplay>
            {screenshots.length > 0 &&
              screenshots.map((img) => (
                <img key={img.id} src={img.image} alt="screenshots" />
              ))}
          </Carousel>
        </div>
        <div className={styles.infoBlock}>
          <h4 className={styles.subtitle}>Additional Information</h4>
          <ul className={cn(styles.addInfo, styles.list)}>
            <li className={styles.about}>
              <span>Title </span>
              {title}
            </li>
            <li className={styles.about}>
              <span>Developer </span>
              {developer}
            </li>
            <li className={styles.about}>
              <span>Publisher </span>
              {publisher}
            </li>
            <li className={styles.about}>
              <span>Release Date </span>
              {datePerse(release_date)}
            </li>
            <li className={styles.about}>
              <span>Genre </span>
              {genre}
            </li>
            <li className={styles.about}>
              <span>Platform </span>
              {platform}
            </li>
          </ul>
        </div>
        {minimum_system_requirements && (
          <div className={styles.infoBlock}>
            <h4 className={styles.subtitle}>
              Minimum System Requirements <span>({platform})</span>
            </h4>
            <ul className={cn(styles.list, styles.system)}>
              <li className={styles.about}>
                <span>OS </span>
                {minimum_system_requirements.os}
              </li>
              <li className={styles.about}>
                <span>Processor </span>
                {minimum_system_requirements.processor}
              </li>
              <li className={styles.about}>
                <span>Memory </span>
                {minimum_system_requirements.memory}
              </li>
              <li className={styles.about}>
                <span>Graphics </span>
                {datePerse(minimum_system_requirements.graphics)}
              </li>
              <li className={styles.about}>
                Storage <span>{minimum_system_requirements.storage}</span>
              </li>
              <li className={styles.about}>
                Additional notes{" "}
                <span>Specifications may change during development</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

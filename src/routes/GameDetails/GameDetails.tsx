import React from "react";
import cn from "classnames";
import { Button, Carousel } from "antd";
import { ArrowLeftOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { datePerse } from "../../utils";

import styles from "./GameDetails.module.css";
import { GAME } from "./mockdata";

export const GameDetails = () => {
  return (
    <div className={cn(styles.container, "wrapper")}>
      <div className={styles.details}>
        <div className={styles.play}>
          <img src={GAME.thumbnail} alt={GAME.title} />
          <Button href={GAME.game_url} target="_blank" type="primary">
            PLAY NOW <RightCircleOutlined />
          </Button>
          <Button className={styles.btn} type="default">
            <Link to="/games">
              <ArrowLeftOutlined />
              Back to the games' list
            </Link>
          </Button>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{GAME.title}</h2>
          <div className={styles.infoBlock}>
            <h4 className={styles.subtitle}>About {GAME.title}</h4>
            <p className={styles.about}>{GAME.description}</p>
          </div>
          <div className={styles.infoBlock}>
            <h4 className={styles.subtitle}>{GAME.title} Screenshots</h4>
            <Carousel autoplay>
              {GAME.screenshots.length > 0 &&
                GAME.screenshots.map((img) => (
                  <img key={img.id} src={img.image} alt="screenshots" />
                ))}
            </Carousel>
          </div>
          <div className={styles.infoBlock}>
            <h4 className={styles.subtitle}>Additional Information</h4>
            <ul className={styles.addInfo}>
              <li className={styles.about}>
                Title <span>{GAME.title}</span>
              </li>
              <li className={styles.about}>
                Developer <span>{GAME.developer}</span>
              </li>
              <li className={styles.about}>
                Publisher <span>{GAME.publisher}</span>
              </li>
              <li className={styles.about}>
                Release Date <span>{datePerse(GAME.release_date)}</span>
              </li>
              <li className={styles.about}>
                Genre <span>{GAME.genre}</span>
              </li>
              <li className={styles.about}>
                Platform <span>{GAME.platform}</span>
              </li>
            </ul>
          </div>
          <div className={styles.infoBlock}>
            <h4 className={styles.subtitle}>
              Minimum System Requirements <span>({GAME.platform})</span>
            </h4>
            <ul className={styles.addInfo}>
              <li className={styles.about}>
                OS <span>{GAME.minimum_system_requirements.os}</span>
              </li>
              <li className={styles.about}>
                Processor{" "}
                <span>{GAME.minimum_system_requirements.processor}</span>
              </li>
              <li className={styles.about}>
                Memory <span>{GAME.minimum_system_requirements.memory}</span>
              </li>
              <li className={styles.about}>
                Graphics{" "}
                <span>
                  {datePerse(GAME.minimum_system_requirements.graphics)}
                </span>
              </li>
              <li className={styles.about}>
                Storage <span>{GAME.minimum_system_requirements.storage}</span>
              </li>
              <li className={styles.about}>
                Additional notes{" "}
                <span>Specifications may change during development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

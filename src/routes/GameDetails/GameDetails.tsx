import React, { useEffect } from "react";
import cn from "classnames";
import { Button, Carousel } from "antd";
import { ArrowLeftOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { datePerse } from "../../utils";
import Footer from "../../components/Footer";

import styles from "./GameDetails.module.css";
import { GAME } from "./mockdata";

export const GameDetails = () => {
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
        <div className={styles.details}>
          <div className={styles.stickyContainer}>
            <div className={styles.play}>
              <img src={GAME.thumbnail} alt={GAME.title} />
              <Button
                style={{ boxShadow: "none" }}
                href={GAME.game_url}
                target="_blank"
                type="primary"
              >
                PLAY NOW <RightCircleOutlined />
              </Button>
              <Button
                onClick={handleBackBtn}
                className={styles.btn}
                type="default"
              >
                <ArrowLeftOutlined />
                Back to the games' list
              </Button>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h1 className={styles.title}>{GAME.title}</h1>
              <p className={styles.short}>{GAME.short_description}</p>
            </div>
            <div className={styles.infoBlock}>
              <h4 className={styles.subtitle}>About {GAME.title}</h4>
              <p className={styles.desc}>{GAME.description}</p>
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
              <ul className={cn(styles.addInfo, styles.list)}>
                <li className={styles.about}>
                  <span>Title </span>
                  {GAME.title}
                </li>
                <li className={styles.about}>
                  <span>Developer </span>
                  {GAME.developer}
                </li>
                <li className={styles.about}>
                  <span>Publisher </span>
                  {GAME.publisher}
                </li>
                <li className={styles.about}>
                  <span>Release Date </span>
                  {datePerse(GAME.release_date)}
                </li>
                <li className={styles.about}>
                  <span>Genre </span>
                  {GAME.genre}
                </li>
                <li className={styles.about}>
                  <span>Platform </span>
                  {GAME.platform}
                </li>
              </ul>
            </div>
            <div className={styles.infoBlock}>
              <h4 className={styles.subtitle}>
                Minimum System Requirements <span>({GAME.platform})</span>
              </h4>
              <ul className={cn(styles.list, styles.system)}>
                <li className={styles.about}>
                  <span>OS </span>
                  {GAME.minimum_system_requirements.os}
                </li>
                <li className={styles.about}>
                  <span>Processor </span>
                  {GAME.minimum_system_requirements.processor}
                </li>
                <li className={styles.about}>
                  <span>Memory </span>
                  {GAME.minimum_system_requirements.memory}
                </li>
                <li className={styles.about}>
                  <span>Graphics </span>
                  {datePerse(GAME.minimum_system_requirements.graphics)}
                </li>
                <li className={styles.about}>
                  Storage{" "}
                  <span>{GAME.minimum_system_requirements.storage}</span>
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
      <Footer />
    </>
  );
};

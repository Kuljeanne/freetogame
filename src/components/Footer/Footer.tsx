import React from "react";
import cn from "classnames";

import logo from "../../assets/logo-footer.png";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={cn(styles.container, "wrapper")}>
        <a
          className={styles.link}
          href="https://github.com/Kuljeanne"
          target="_blank"
          rel="noreferrer"
        >
          Made By Kuljeanne
        </a>
        <a
          className={styles.link}
          href="https://www.freetogame.com/api-doc"
          target="_blank"
          rel="noreferrer"
        >
          Free-To-Play Games API
        </a>
        <img src={logo} alt="logo" />
      </div>
    </footer>
  );
};

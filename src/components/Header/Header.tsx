import React from "react";
import cn from "classnames";
import { Button } from "antd";
import { Link } from "react-router-dom";

import logo from "../../assets/freetogame-logo.png";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={cn(styles.container, "wrapper")}>
        <Link to="/games">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <Button className={styles.btn} type="primary" ghost>
          Join Free
        </Button>
      </div>
    </div>
  );
};

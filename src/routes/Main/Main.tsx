import styles from "./Main.module.css";

import React from "react";
import cn from "classnames";

export const Main = () => {
  return <div className={cn(styles.container, "wrapper")}>
    <div className={styles.filters}></div>
    <div className={styles.games}></div>
  </div>;
};

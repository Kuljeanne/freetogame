import React from "react";

import styles from "./ErrorBlock.module.css";

export const ErrorBlock = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>Something went wrong, <br/> please try again later...</p>
    </div>
  );
};

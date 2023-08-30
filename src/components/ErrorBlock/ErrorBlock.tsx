import React from "react";

import styles from "./ErrorBlock.module.css";
type ErrorBlockType = {
  message: string;
};
export const ErrorBlock = ({ message }: ErrorBlockType) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        <span>{message}</span>, please try again later...
      </p>
    </div>
  );
};

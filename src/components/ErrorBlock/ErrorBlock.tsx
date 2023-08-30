import React from "react";

import styles from "./ErrorBlock.module.css";
type ErrorBlockType = {
  message?: string;
};
export const ErrorBlock = ({
  message = "Something went wrong",
}: ErrorBlockType) => {
  return (
    <div className={styles.container} data-testid='error-block'>
      <p className={styles.message}>
        <span>{message}</span>, please try again later...
      </p>
    </div>
  );
};

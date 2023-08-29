import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>Oops... There is nothing here...</p>
        <Link to="/games">Go back</Link>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
        <p className={styles.message}>Oops... There is nothing here...</p>
        <Link className={styles.message} to="/games">Go back</Link>
    </div>
  );
};

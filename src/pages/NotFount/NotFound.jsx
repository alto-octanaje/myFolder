import styles from "./NotFoundt.module.css";
import { useLocation } from "react-router-dom";
import BackButton from "../../Component/tools/BackButton/BackButton";

import React from "react";

export const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <div className={styles.notFoundContainer}>
        <h1 className={styles.notFoundTitle}>404 - Página no encontrada</h1>
        <p className={styles.notFoundMessage}>
          La ruta <code>{location.pathname}</code> no existe.
        </p>
        <BackButton />
      </div>
    </>
  );
};

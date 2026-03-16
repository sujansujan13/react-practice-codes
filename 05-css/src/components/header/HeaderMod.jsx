import React from "react";
import styles from "./Header.module.css";

const HeaderMod = () => {
  return (
    <div className={styles.header}>
      <h3>Sujan</h3>
      <button className={styles.btn}>Login:</button>
    </div>
  );
};

export default HeaderMod;

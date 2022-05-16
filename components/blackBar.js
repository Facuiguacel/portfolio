import React from "react";
import LangSwitch from "./langSwitch";

import styles from "../styles/blackBar.module.css";

const BlackBar = ({ text, options = false }) => {
  return (
    <div className={styles.blackBar}>
      <div className={styles.innerContent}>
        {options && <LangSwitch />}
        {text}
      </div>
    </div>
  );
};

export default BlackBar;

import React from "react";
import styles from "../styles/tech.module.css";

function NewlineText({ text }) {
  // Separa el string en lineas a partir del \n porque React no lo hace
  return text.split("\n").map((str, index) => <div key={index}>{str}</div>);
}

function Tech({ title, description = "", techIcon }) {
  return (
    <div className={styles.tech}>
      <div className={styles.icon}>{techIcon}</div>
      <div className={styles.description}>
        <strong>{title}</strong>
        <br />
        <NewlineText text={description} />
      </div>
    </div>
  );
}

export default Tech;

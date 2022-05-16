import React from "react";
import LangSwitch from "./langSwitch";

const styles = {
  position: "sticky",
  top: "0",
  width: "100%",
  display: "flex",
  backgroundColor: "black",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  height: "2rem",
  fontSize: "14px",
  zIndex: "10",
  padding: "0 50px",
};
const BlackBar = ({ text, options = false }) => {
  return (
    <div style={styles}>
      {text}
      {options && <LangSwitch />}
    </div>
  );
};

export default BlackBar;

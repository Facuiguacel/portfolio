import React from "react";

function TechTag({ title }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "max-content",
        padding: ".15em .35em",
        fontSize: "13px",
      }}
    >
      #{title}
    </div>
  );
}

export default TechTag;

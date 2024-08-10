import React from "react";

const Tooltip = ({ content, pos, visible }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: pos.y - 300,
        left: pos.x + 50,
        backgroundColor: "#343a40",
        padding: "8px",
        border: "1px solid #000000",
        borderRadius: "4px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        pointerEvents: "none",
        color: "white",
      }}>
      {content}
    </div>
  );
};

export default Tooltip;

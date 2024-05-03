import React from "react";

export default function Child({ child, updateMyParent }) {
  const message =
    "Yahoo, message from Child to Parent, using callback fn and props, delivered successfully!";
  return (
    <div className="child">
      <h4>Child</h4>
      <p>Change Parent Value</p>
      <p>{child}</p>
      <button
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => updateMyParent(message)}
      >
        Click to Update parent
      </button>
    </div>
  );
}

import React from "react";
import Child from "./Child";
import { useState } from "react";

export default function Parent({ parent, child }) {
  const [message, setMessage] = useState("waiting...");
  const updateParent = (m) => {
    console.log("Event in parent fired from Child", m);
    setMessage(m);
  };
  return (
    <div>
      <h2>r: Update parent state (using callback)</h2>
      <div className="parent">
        <h4>Parent</h4>
        <p>I need to be update from my child - see message below:</p>
        <h3 style={{ backgroundColor: "orange" }}>{message} </h3>
        <p>{parent}</p>
      </div>
      <Child child={child} updateMyParent={updateParent} />
    </div>
  );
}

// import { useState } from "react";
import Parent from "./Parent";
import "./App.css";

function App(props) {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Parent
        parent={"Data from APP to PARENT"}
        child={"Data from APP to CHILD"}
      />
    </>
  );
}

export default App;

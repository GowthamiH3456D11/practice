import React from "react";
import ExpoComp from "./ExpoComp";
import { useState } from "react";

export default function App9() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <ExpoComp count={0}/> */}
      <ExpoComp count={count}/>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Count{count}
      </button>
    </div>
  );
}
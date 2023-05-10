import React from "react";
import { useCount } from "../contexts/CountContextProvider";

const Count = () => {
  const { getPlus, counter, getMinus } = useCount();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={getPlus}>plus</button>
      <button onClick={getMinus}>minus</button>
    </div>
  );
};

export default Count;

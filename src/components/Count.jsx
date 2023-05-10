import React from "react";
import { useCount } from "../contexts/CountContextProvider";

const count = () => {
  const { getPlus, counter } = useCount();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={getPlus}>plus</button>
      <button>minus</button>
    </div>
  );
};

export default count;

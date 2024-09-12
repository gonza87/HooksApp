import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(10);

  return (
    <>
      <h1>counter: {counter}</h1>
      <hr />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};

export default CounterApp;

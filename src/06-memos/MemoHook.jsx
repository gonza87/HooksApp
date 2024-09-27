import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useState } from "react";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{heavyStuff(500)}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Sow/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

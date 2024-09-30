import React from "react";
import { useState } from "react";
import ShowIncrement from "./ShowIncrement";
import { useCallback } from "react";

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>usecallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
}

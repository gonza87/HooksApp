import React from "react";
import { useState } from "react";

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);
  return (
    <>
      <h1>usecallback Hook: {counter}</h1>
    </>
  );
}

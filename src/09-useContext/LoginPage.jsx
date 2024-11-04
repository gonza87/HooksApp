import React, { useContext } from "react";
import { Usercontext } from "./context/UserContext";

export const LoginPage = () => {
  const { hola } = useContext(Usercontext);
  console.log(hola);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
    </>
  );
};

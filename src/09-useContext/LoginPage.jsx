import React, { useContext } from "react";
import { Usercontext } from "./context/UserContext";

export const LoginPage = () => {
  const algo = useContext(Usercontext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
    </>
  );
};

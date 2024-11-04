import React from "react";
import { Usercontext } from "./UserContext";

export const UserProvider = ({ children }) => {
  return (
    <Usercontext.Provider value={{ hola: "Mundo" }}>
      {children}
    </Usercontext.Provider>
  );
};

import React from "react";
import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Menssage Mounted");

    return () => {
      console.log("Menssage unmounted");
    };
  }, []);

  return (
    <>
      <h1>Usuario ya existe</h1>
    </>
  );
};

export default Message;

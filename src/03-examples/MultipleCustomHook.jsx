import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/2"
  );

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />
      {isLoading && <h2>cargando</h2>}
      <pre>{data?.name}</pre>
    </>
  );
};

import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />
      {isLoading && <h2>cargando</h2>}
      <h2>{data?.name}</h2>

      <button className="btn btn-primary mt-2 me-2">Anteriores</button>
      <button className="btn btn-primary mt-2">Siguiente</button>
    </>
  );
};

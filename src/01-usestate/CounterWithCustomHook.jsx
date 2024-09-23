import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <>
      <h1>Counter with Hook:{counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-danger">Reset</button>
    </>
  );
};

export default CounterWithCustomHook;

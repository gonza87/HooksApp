import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, setCounter } = useCounter();
  return (
    <>
      <h1>Counter with Hook:{counter}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
      <button className="btn btn-primary">-1</button>
      <button className="btn btn-danger">Reset</button>
    </>
  );
};

export default CounterWithCustomHook;

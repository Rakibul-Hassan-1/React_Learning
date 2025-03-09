import { useState } from "react";
const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  const addCount = () => {
    setCount(count + 1);
  };
  const RandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addCount}>Add Count</button>
      <h1>Random Number: {RandomNumber}</h1>
      <button onClick={RandomNumber}>Random Number</button>
    </div>
  );
};
export default ExampleOne;

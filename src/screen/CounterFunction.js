import React from "react";

const CounterScreen = () => {
  const [counter, setCounter] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);

  // componentDidMount
  React.useEffect(() => {
    console.log("ComponentDidMount");
  }, []);

  // componentDidUpdate
  React.useEffect(() => {
    console.log("useEffect", counter);
  }, [counter]);

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${counter} times`;
  });

  const increment = () => {
    console.log("Increment");
    let newValue = counter + 1;
    setCounter(newValue);
    console.log("after Increment", newValue);
  };

  const decrement = () => {
    console.log("Decrement");
    let newValue = counter - 1;
    setCounter(newValue);
    console.log("after Decrement", newValue);
  };

  const addClicks = () => {
    setClicks(clicks + 1);
  };

  console.log("render", counter);
  return (
    <div className="container">
      <div>
        <h2>{counter}</h2>
      </div>
      <div>
        <button onClick={addClicks}>Add Click</button>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default CounterScreen;

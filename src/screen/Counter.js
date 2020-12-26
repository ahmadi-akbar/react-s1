import React from "react";
let counter = 0;

export default class CounterScreen extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      clicks: 15,
    };
  }

  increment = () => {
    counter = counter + 1;
    this.setState({ clicks: counter });
    console.log("increment counter => ", counter);
  };

  decrement = () => {
    counter = counter - 1;
    this.setState({ clicks: counter });
    console.log("decrement counter => ", counter);
  };

  render() {
    console.log("render", this.state);
    return (
      <div className="container">
        <div>
          {/* <h2>{counter}</h2> */}
          <h2>{this.state.clicks}</h2>
        </div>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

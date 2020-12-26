import React from "react";

export default class BindingScreen extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      clicks: 15,
    };

    this.bindedFunc = this.bindedFunc.bind(this);
  }

  arrowFunc = () => {
    console.log("arrowFunc this", this);
  };

  func() {
    console.log("func this", this);
  }

  bindedFunc() {
    console.log("bindedFunc this", this);
  }

  render() {
    console.log("render", this.state);
    return (
      <div className="container">
        <div>
          <button onClick={this.arrowFunc}>arrowFunc</button>
          <button onClick={this.func}>func</button>
          <button onClick={this.bindedFunc}>bindedFunc</button>
        </div>
      </div>
    );
  }
}

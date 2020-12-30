import React from "react";

const TimeOut = 5000;

export default class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      running: true,
    };

    console.log("constructor");
  }

  tickTimer = () => {
    const { time } = this.state;
    this.setState({ time: time + 1 });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(this.tickTimer, TimeOut);
  }

  handleToggleTimer = () => {
    const { running } = this.state;
    if (running) clearInterval(this.timer);
    else this.timer = setInterval(this.tickTimer, TimeOut);
    this.setState({ running: !running });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("Render", this.state);
    return (
      <div className="container">
        <h1>Timer</h1>
        <div>
          <button onClick={this.handleToggleTimer}>
            {this.state.running ? "Pause" : "Start"}
          </button>
        </div>
        <div>{this.state.time}</div>
      </div>
    );
  }
}

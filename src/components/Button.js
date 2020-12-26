import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  // console.log("this", this.props);
  render() {
    return (
      <button className={this.props.red ? "red" : "my-button"}>
        {this.props.text}
      </button>
    );
  }
}

const Button2 = () => <button>Button</button>;

export default Button;

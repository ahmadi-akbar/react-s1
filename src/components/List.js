import React from "react";

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor in list", props);
  }

  componentWillUnmount() {
    // const { list } = this.state;
    const { items } = this.props;
    localStorage.setItem("list", JSON.stringify(items));
    console.log("componentWillUnmount list");
  }

  render() {
    // console.log("Render in list", this.props);
    return (
      <div className="list">
        {this.props.items.map((item, index) => (
          <div className="list-item" key={index}>
            {item}
            <button onClick={() => this.props.handleRemove(index)}>x</button>
          </div>
        ))}
      </div>
    );
  }
}

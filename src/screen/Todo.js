import React from "react";

export default class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: ["item one", "item two"],
      visible: true,
    };
  }

  handleOnchange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleAdd = () => {
    let newItem = this.state.text;
    let list = this.state.list;
    if (newItem !== "") {
      list.push(newItem);
      this.setState({ list: list, text: "" });
    } else {
      alert("empty");
      console.log("this is a empty item");
    }
  };

  handleRemove = (index) => {
    console.log("index", index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
    console.log("list after remove", list);
  };

  render() {
    return (
      <div className="container">
        <h1>My todo</h1>
        <button onClick={this.handleToggle}>Toggle List</button>
        <div>
          <input
            placeholder="enter here"
            onChange={this.handleOnchange}
            value={this.state.text}
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>
        {this.state.visible && (
          <div className="list">
            {this.state.list.map((item, index) => (
              <div className="list-item" key={index}>
                {item}
                <button onClick={() => this.handleRemove(index)}>x</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

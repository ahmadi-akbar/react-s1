import React from "react";
import List from "../components/List";

export default class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: [],
      visible: true,
    };
  }

  componentDidMount() {
    let list = localStorage.getItem("list");
    list = JSON.parse(list);
    console.log("componentDidMount", list);
    if (list) this.setState({ list });
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

  saveList = () => {
    const { list } = this.state;
    localStorage.setItem("list", JSON.stringify(list));
  };

  render() {
    return (
      <div className="container">
        <h1>My todo</h1>
        <div>
          <button onClick={this.handleToggle}>Toggle List</button>
          <button onClick={this.saveList}>Save List</button>
        </div>
        <div>
          <input
            placeholder="enter here"
            onChange={this.handleOnchange}
            value={this.state.text}
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>
        {this.state.visible && this.state.visible && (
          <List items={this.state.list} handleRemove={this.handleRemove} />
        )}
      </div>
    );
  }
}

import React from "react";
import ShoppingCard1 from "../components/ShoppingCard1";
import ShoppingCard2 from "../components/ShoppingCard2";

export default class TodoScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <ShoppingCard1 />
        <ShoppingCard2 newProp time date />
      </div>
    );
  }
}

import React from "react";
import ShoppingCard1 from "../components/ShoppingCard1";
import ShoppingCard2 from "../components/ShoppingCard2";

export default class TodoScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <ShoppingCard1  />
        <ShoppingCard2  newProp time date/>
      </div>
    );
  }
}

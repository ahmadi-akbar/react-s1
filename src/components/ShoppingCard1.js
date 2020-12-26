import React from "react";

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>{props.time}</p>
      <p>{props.date}</p>
      <p>{props.newProp}</p>
    </div>
  );
};

ShoppingCart.defaultProps = {
  time: "12:00",
  date: "12/12/12",
};

export default ShoppingCart;

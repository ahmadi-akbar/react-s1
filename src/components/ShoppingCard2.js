import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ time = "12:00", date = "12/12/12", newProp }) => (
  <div>
    <h1>Shopping Cart Component</h1>
    <p>{time}</p>
    <p>{date}</p>
    <p>{newProp}</p>
  </div>
);

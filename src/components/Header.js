import React from "react";

function Comp() {
  return (
    <div className="CustomHeader">
      <p>I am Header</p>
    </div>
  );
}


// eqiaalent to function Comp
// arrow function
const Comp2 = () => (
  <div className="CustomHeader">
    <p>I am Header</p>
  </div>
);

export default Comp;

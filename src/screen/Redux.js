import React from "react";
import { useDispatch } from "react-redux";
import ShoppingCard1 from "../components/ShoppingCard1";
import ShoppingCard2 from "../components/ShoppingCard2";

export default function ReduxScreen() {
  const dispatch = useDispatch();
  const [text, setText] = React.useState();

  const toggle = () => {
    dispatch({ type: "ToggleSidebar", payload: null });
  };
  const toggleHeader = () => {
    dispatch({ type: "ToggleHeader", payload: null });
  };

  const setHeader = () => {
    dispatch({ type: "SetHeader", payload: text });
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <ShoppingCard1 />
      <ShoppingCard2 newProp time date />

      <button onClick={toggle}>toggle sidebar</button>
      <button onClick={toggleHeader}>toggleHeader Header</button>
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={setHeader}>Set Header</button>
      </div>
    </div>
  );
}

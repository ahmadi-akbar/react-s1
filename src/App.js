import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SC from "./screen/index";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/api">API</Link>
            <Link to="/timer">Timer</Link>
            <Link to="/binding">Binding</Link>
            <Link to="/todo">Todo</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/home">Home</Link>
            <Link to="/styling">Styling</Link>
            <Link to="/counter-fun">CounterFunction</Link>
            <Link to="/practice">Practice</Link>
          </div>
        </header>

        <Route path="/api" exact>
          <SC.Api />
        </Route>

        <Route path="/practice" exact>
          <SC.Practice />
        </Route>

        <Route path="/counter-fun" exact>
          <SC.CounterFunction />
        </Route>
        <Route path="/binding">
          <SC.BindingScreen />
        </Route>
        <Route path="/todo">
          <SC.Todo />
        </Route>
        <Route path="/counter">
          <SC.Counter />
        </Route>
        <Route path="/timer">
          <SC.Timer />
        </Route>
        <Route path="/home">
          <SC.Home />
        </Route>
        <Route path="/styling">
          <SC.Styling />
        </Route>
      </Router>
    );
  }
}

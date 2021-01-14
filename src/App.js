import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header routes={routes} />
        {routes.map((i) => (
          <Route exact path={i.path} component={i.component} />
        ))}
      </Router>
    );
  }
}

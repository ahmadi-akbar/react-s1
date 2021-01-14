import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true,
    };
  }
  render() {
    return (
      <Router>
        <Header
          routes={routes}
          onMenu={() => this.setState({ sidebar: !this.state.sidebar })}
        />
        {this.state.sidebar && (
          <Sidebar onMenu={() => this.setState({ sidebar: false })} />
        )}
        {routes.map((i) => (
          <Route exact path={i.path} component={i.component} />
        ))}
      </Router>
    );
  }
}

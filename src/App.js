import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

export default function App() {
  const [state, setState] = React.useState({ sidebar: true });

  const SidebarGlobal = useSelector((globalState) => {
    return globalState.sidebar;
  });

  const HeaderGlobal = useSelector((globalState) => {
    return globalState.header;
  });

  console.log("render in App SidebarGlobal", SidebarGlobal);
  console.log("render in App HeaderGlobal", HeaderGlobal);

  return (
    <Router>
      {HeaderGlobal && (
        <Header
          routes={routes}
          onMenu={() => setState({ sidebar: !this.state.sidebar })}
        />
      )}

      {SidebarGlobal && <Sidebar onMenu={() => setState({ sidebar: false })} />}

      {routes.map((i) => (
        <Route exact key={i.path} path={i.path} component={i.component} />
      ))}
    </Router>
  );
}

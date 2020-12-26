import MyHeader from "./Header";
import Complex from "./Complex";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {"ali" + " mast" + (1 + 2)}
        </a>
        <Complex />
      </header>
    </div>
  );
}

export default App;

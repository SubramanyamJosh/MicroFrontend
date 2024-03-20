import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";

function App() {
  useEffect(() => {
    const loadMicrofrontend = async (id: string, url: string) => {
      const { default: Microfrontend } = await import(url);
      ReactDOM.render(<Microfrontend />, document.getElementById(id));
    };

    loadMicrofrontend("app1", "./Microfrontend1");
    loadMicrofrontend("app2", "./Microfrontend2");
  }, []);
  return (
    <div>
      <h2>Micro Frontend</h2>

      <div id="app1" className="microfrontend"></div>
      <div id="app2" className="microfrontend"></div>
    </div>
  );
}

export default App;

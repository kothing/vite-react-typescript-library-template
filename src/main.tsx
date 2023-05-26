import "./main.css";

import React from "react";
import ReactDOM from "react-dom";

import { Button } from "./lib";

function App() {
  return (
    <div className="app">
      <p>Vite react typescript library template</p>
      <Button>Button</Button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);

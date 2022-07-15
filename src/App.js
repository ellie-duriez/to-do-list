import React from "react"
import './App.css';
import Inputfield from "./components/Inputfield.js"
import Listitem from "./components/Listitem.js";

function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <Inputfield />
    </div>
  );
}

export default App;

import React from "react"
import './App.css';
import Inputfield from "./components/Inputfield.js"
import Listitem from "./components/Listitem.js";

function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <Inputfield />
      <Listitem text="this is my chore"/>
    </div>
  );
}

export default App;

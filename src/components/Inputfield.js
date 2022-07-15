import React from "react";
import { useState } from "react";
import Listitem from "./Listitem";

function Inputfield () {

    const [enteredText,setEnteredText] = useState("")

    function updateEnteredText(event) {
        const {value} = event.target
        setEnteredText(value)
    }

    const clear = function() {
        setEnteredText("")
    }

    const [list,setList] = useState([])


    const add = function() {
        setList([...list, { text: enteredText}]);
        setEnteredText("")
    }

    return (
        <>
        <div className="flex-container">
        <input type="text" onChange={updateEnteredText} value={enteredText}
        placeholder="Enter your list item!"></input>
        <button onClick={add}>add</button>
        <button onClick={clear}>clear</button>
        </div>
        <div className="flex-container">

        {list.map((item, index) => {
            console.log("pls: ",item)
              return (
                <Listitem
                  text={item.text}
                  key={index}
                />
              );
            })}

        </div>
        </>
    )
}

export default Inputfield;
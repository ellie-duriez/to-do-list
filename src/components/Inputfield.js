import React from "react";
import { useState } from "react";
import Listitem from "./Listitem";

function Inputfield () {

    const [enteredText,setEnteredText] = useState("")

    function updateEnteredText(e) {
        const {value} = e.target
        setEnteredText(value)
    }

    const clear = function() {
        setEnteredText("")
    }

    const [list,setList] = useState([])


    const add = function() {
        if (enteredText.trim() != "") {
            setList([...list, { text: enteredText}]);
            setEnteredText("")
        }
    }

    function removeListItem(e) {
        console.log(e)
        console.log("key: ", e.target.key)
        const index = e.target.key
        console.log("index",index)
        console.log("before splice:", list)
        list.splice(index)
        console.log("after splice:", list)
        setList(list)
        console.log("after setlist:", list)
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
                handleRemove={removeListItem}
                  text={item.text}
                  key={index}
                  id={index}
                />
              );
            })}

        </div>
        </>
    )
}

export default Inputfield;
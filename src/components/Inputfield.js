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

    function removeListItem(i) {
        const updatedList = list.filter( (item,index) => index != i )
        setList(updatedList)
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
            {/* console.log("pls: ",item,"<-item",index,"<-index") */}
              return (
                <Listitem
                    handleRemove={removeListItem.bind(this,index)}
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
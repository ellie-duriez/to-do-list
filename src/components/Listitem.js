import React, {useState} from "react";


function Listitem (props) {

    const [isDone,setIsDone] = useState(false)

    function toggleDone(e) {
        setIsDone(current => !current)
        if (isDone == true) {
            e.target.innerText = "mark as done"}
        else (
            e.target.innerText = "unmark as done"
        )
    }

    return (
        <div className="flex-container">
            <p style={{textDecoration: isDone?"line-through":""}}>{props.text}</p>
            <button onClick={toggleDone}>mark as done</button>
            <button onClick={props.handleRemove}>remove</button>
        </div>
    )
}

export default Listitem;
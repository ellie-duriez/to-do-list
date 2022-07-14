import React from "react";

function Listitem (props) {
    return (
        <div className="flex-container">
            <p>{props.text}</p>
            <button>done</button>
            <button>delete</button>
        </div>
    )
}

export default Listitem;
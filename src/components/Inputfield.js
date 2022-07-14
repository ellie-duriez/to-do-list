import React from "react";

function Inputfield () {
    return (
        <div className="flex-container">
        <input type="text" placeholder="Enter your list item!"></input>
        <button>add</button>
        <button>bin</button>
        </div>
    )
}

export default Inputfield;
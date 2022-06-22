import React from "react";
import style from "../styles/styleInput.css"

const InputTask = () => {
    return(
        <div className="input">
            <input type="text"/>
            <input type="datetime-local"/>
            <select>
                <option>Home</option>
                <option>Work</option>
                <option>Study</option>
            </select>
            <input type="submit" value="Submit"/>
        </div>
    )
}

export default InputTask;
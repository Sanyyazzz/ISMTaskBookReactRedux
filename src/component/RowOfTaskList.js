import React from "react";
import style from './styleTable.css';

const RowTask = (props) => {
    return(
        <tr>
            <td>Important</td>
            <td>Build House</td>
            <td>01.1.2</td>
            <td>House</td>
            <td>
                <a href="#">Edit</a>
            </td>
        </tr>
    )
}

export default RowTask;
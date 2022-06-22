import React from "react";
import style from '../styles/styleTable.css';
import {useDispatch} from "react-redux";
import {completed} from "../../DATA/reducers/tasksSlice";

const RowTask = ({task}) => {

    const distpatch = useDispatch();

    const Complete = () => {
        distpatch(completed(task.id));
    }

    if(task.important == true){
        return (
            <tr>
                <td><img src = "http://s1.iconbird.com/ico/2013/9/452/w512h4961380477090star.png" width="20px"/></td>
                <td>{task.taskDesc}</td>
                <td>{task.deadLine}</td>
                <td>{task.category}</td>
                <td>
                    <button type="button" onClick={Complete}>Completed</button>
                </td>
            </tr>
        )
    }else{
        return (
            <tr key={task.id}>
                <td></td>
                <td>{task.taskDesc}</td>
                <td>{task.deadLine}</td>
                <td>{task.category}</td>
                <td>
                    <button type="button" onClick={Complete}>Completed</button>
                </td>
            </tr>
        )
    }
}

export default RowTask;
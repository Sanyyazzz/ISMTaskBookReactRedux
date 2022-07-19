import React from "react";
import {useDispatch} from "react-redux";
import {completed, deleteTask} from "../../DATA/reducers/tasksSlice";
import RowEdit from "./RowEdit";

const RowTask = (props) => {

    const distpatch = useDispatch();

    const onCompleteTask = () => {
        distpatch(completed(props.task.id));
    }

    const onDeleteTask = () => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Delete task: "+ props.task.taskDesc +"?")){
            distpatch(deleteTask(props.task.id));
        }else{ alert("1")}
    }

    const onEditTask = () => {
        props.func('rowEdit');
    }

    if(props.task.important == true){
        return (
            <tr key={props.task.id}>
                <td><img src = "http://s1.iconbird.com/ico/2013/9/452/w512h4961380477090star.png" width="20px"/></td>
                <td>{props.task.taskDesc}</td>
                <td>{props.task.deadLine}</td>
                <td>{props.task.category}</td>
                <td>
                    <button className="complete" type="button" onClick={onCompleteTask}>Completed</button>
                    <button className="delete" type="button" onClick={onDeleteTask}>Delete</button>
                    <button className="" type="button" onClick={onEditTask}>Edit</button>
                </td>
            </tr>
        )
    }else{
        return (
            <tr key={props.task.id}>
                <td></td>
                <td>{props.task.taskDesc}</td>
                <td>{props.task.deadLine}</td>
                <td>{props.task.category}</td>
                <td>
                    <button className="complete" type="button" onClick={onCompleteTask}>Completed</button>
                    <button className="delete" type="button" onClick={onDeleteTask}>Delete</button>
                    <button className="" type="button" onClick={onEditTask}>Edit</button>
                </td>
            </tr>
        )
    }
}

export default RowTask;
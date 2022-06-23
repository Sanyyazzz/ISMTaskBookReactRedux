import React, {useState} from "react";
import style from '../styles/styleTable.css';
import RowEdit from "./RowEdit";
import RowTask from "./RowTask";

const RowOfTaskList = (props) => {
    const[stateRow,setState]=useState('rowTask');

    const onEditTask = () => {
        if(props.count > 0){ alert("You edit another task"); }
        else{
            props.setCount(1);
            setState('rowEdit');
        }
    }

    const onSaveTask = (s) => {
        setState('rowTask');
        props.setCount(0);
    }

    switch(stateRow){

        case 'rowTask': return(<RowTask task={props.task} func={onEditTask} />);

        case 'rowEdit': return(<RowEdit task={props.task} func={onSaveTask} />);

        default: return(<tr></tr>);
    }
}

export default RowOfTaskList;
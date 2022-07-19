import {React, useState} from 'react';
import '../styles/index.css';
import RowTask from "./RowOfTaskList";
import RowEdit from "./RowEdit";
import style from '../styles/styleTable.css';
import {useSelector} from "react-redux";

const TaskList = () => {

    const[countOfActiveEdit,setCountOfActiveEdit]=useState(0);

    const tasksObj = useSelector(store=>store.tasks.tasks);

    const tasks = tasksObj.map((task) =>
        <RowTask key={task.id} task={task} count={countOfActiveEdit} setCount = {setCountOfActiveEdit} />
    )

    return(
        <div className="taskList">
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Tasks</th>
                    <th>Deadline</th>
                    <th>Category</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {tasks}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;
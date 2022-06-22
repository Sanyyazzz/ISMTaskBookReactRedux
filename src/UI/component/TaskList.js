import React from 'react';
import '../styles/index.css';
import RowTask from "./RowOfTaskList";
import style from '../styles/styleTable.css';
import {useSelector} from "react-redux";

const TaskList = () => {

    const tasksList = useSelector(store=>store.tasks.tasks);

    const tasks = tasksList.map((task) =>
        <RowTask  key={task.id} task={task} />
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
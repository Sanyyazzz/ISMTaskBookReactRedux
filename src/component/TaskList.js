import React from 'react';
import '../index.css';
import RowTask from "./RowOfTaskList";
import style from './styleTable.css';

const TaskList = () => {

    return(
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
                <RowTask />
                <RowTask />
                <RowTask />
            </tbody>
        </table>
    )
}

export default TaskList;
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {editTask} from "../../DATA/reducers/tasksSlice";



const RowEdit = (props) => {

    const [taskDesc, setTaskDesc] = useState(props.task.taskDesc)
    const [deadLine, setDeadline] = useState(props.task.deadLine)
    const [category, setCategory] = useState(props.task.category)
    const [important, setImportantStatus] = useState(props.task.important)

    const onTaskDescChanged = e => setTaskDesc(e.target.value)
    const onDeadlineChanged = e => setDeadline(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)
    const onImportantStatusChanged = e => setImportantStatus(!important)

    const dispatch = useDispatch();

    const onSaveEdit = () => {
        let id = props.task.id;
        debugger;
        dispatch(editTask({
            id,
            taskDesc,
            deadLine,
            category,
            important
        }));
        props.func();
    }

    const onCancelEdit = () => {
        props.func();
    }

    return (
        <tr key={props.task.id}>
            <td>
                <div>
                    <input
                        checked={important}
                        id="checkboxImportant"
                        type="checkbox"
                        onClick={onImportantStatusChanged}
                    />Important
                </div>
            </td>
            <td>
                <input
                    value={taskDesc}
                    type="text"
                    id="taskDesc"
                    name="taskDesc"
                    placeholder="Task"
                    onChange={onTaskDescChanged}
                />
            </td>
            <td>
                <input
                    value={deadLine}
                    type="datetime-local"
                    id="deadLine"
                    name="deadLine"
                    onChange={onDeadlineChanged}
                />
            </td>
            <td>
                <select onChange={onCategoryChanged} value={category}>
                    <option>Home</option>
                    <option>Work</option>
                    <option>Study</option>
                </select>
            </td>
            <td>
                <button className="complete" type="button" onClick={onSaveEdit}>Save</button>
                <button className="delete" type="button" onClick={onCancelEdit}>Cancel</button>
            </td>
        </tr>
    )
}

export default RowEdit;
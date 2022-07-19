import React, {useState} from "react";
import style from "../styles/styleInput.css"
import {useDispatch} from "react-redux";
import {addTask} from "../../DATA/reducers/tasksSlice";

const InputTask = () => {
    const [taskDesc, setTaskDesc] = useState('')
    const [deadLine, setDeadline] = useState('')
    const [category, setCategory] = useState('')
    const [important, setImportantStatus] = useState(false)

    const dispatch = useDispatch();
    const onAddTask = () => {
        if(!taskDesc){
            alert("Task is null!");
        }else{
            dispatch(addTask({
                id: Date.now(),
                taskDesc,
                deadLine,
                category,
                completedStatus: false,
                important}));

            setTaskDesc('');
            setDeadline('');
            setCategory('');
            setImportantStatus(false);
        }
    }

    const onTaskDescChanged = e => setTaskDesc(e.target.value)
    const onDeadlineChanged = e => setDeadline(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)
    const onImportantStatusChanged = e => setImportantStatus(!important)

    return (
            <form className="inputTask">
                <input
                    value={taskDesc}
                    type="text"
                    id="taskDesc"
                    name="taskDesc"
                    placeholder="Task"
                    onChange={onTaskDescChanged}
                />
                <input
                    value={deadLine}
                    type="datetime-local"
                    id="deadLine"
                    name="deadLine"
                    onChange={onDeadlineChanged}
                />
                <select onChange={onCategoryChanged} value={category}>
                    <option>Home</option>
                    <option>Work</option>
                    <option>Study</option>
                </select>
                <div>
                    <input
                        checked={important}
                        id="checkboxImportant"
                        type="checkbox"
                        onClick={onImportantStatusChanged}
                    />Important
                </div>
                <button className="addTask" type="button" onClick={onAddTask}>Add Task</button>
            </form>
    )
}

export default InputTask;
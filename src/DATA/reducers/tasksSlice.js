import { createSlice } from '@reduxjs/toolkit'
import {useState} from "react";

export const tasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks:[{
                id: 22235,
                taskDesc: "ISM",
                deadLine: "01.02",
                category: "Work",
                completedStatus: false,
                important: true
            },
            {
                id: 123,
                taskDesc: "Course ISM",
                deadLine: "01.02",
                category: "Work",
                completedStatus: false,
                important: true
            }
        ]
    },

    reducers: {
        addTask (state, action){
            state.tasks.push(action.payload);
        },

        editTask (state, action){
            const task = action.payload;
            const index = state.tasks.findIndex(el => el.id === task.id);
            state.tasks[index]=task;
        },

        deleteTask (state, action){
            const id = action.payload;
            const index = state.tasks.findIndex(el => el.id === id);
            state.tasks.splice(index,1);
        },

        completed (state, action){
            const id = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);
            if (existingTask) {
                existingTask.completedStatus = true;
                alert("Task done!");
            }else{
                alert("Something go wrong...");
            }
        }

    }
})

export const { addTask, editTask, deleteTask, completed } = tasksSlice.actions;

export default tasksSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import {useState} from "react";

export const tasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks:[{
                id: 0,
                taskDesc: "Course ISM",
                deadLine: "01.02",
                category: "Work",
                completedStatus: false,
                important: true,
                count: 1
            },
            {
                id: 1,
                taskDesc: "Build house",
                deadLine: "01.02",
                category: "House",
                completedStatus: false,
                important: false
            }
        ]
    },

    reducers: {
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

export const { completed } = tasksSlice.actions;

export default tasksSlice.reducer;
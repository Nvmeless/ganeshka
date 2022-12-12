import { createSlice, configureStore } from "@reduxjs/toolkit"


const initialState = [
    {id:2, title: "Se Calcifier la glande pinéale", isDone: false},
    {id: 1, title:"Consideration a zeulé", isDone: false},
];

const todoSlice = createSlice(
    {
        name:"todo",
        initialState:initialState,
        reducer: {
            addTask: (state, action) => {
                //action = {type: "ADD_NEW_TASK", payload: "New task"}
                const newTask ={
                    id:Date.now(),
                    title: action.payload,
                    isDone: false
                }
                state.push(newTask);
            },
            toggleTask: (state, action) => {
                //action = {type: "TOGGLE_EXISTING_TASK", payload: 4}
                const task = state.find((t) => t.id === action.payload)
                task.isDone = !task.isDone
            },
            deleteTask: (state, action) => {
                state = state.filter((t) => t.id !== action.payload )
                return state;
            }
        }
    }
);

export const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer
    }
})

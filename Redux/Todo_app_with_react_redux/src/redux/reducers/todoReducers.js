// import {ADD_TODO,TOGGLE_TODO} from '../actions/todoActions';

import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todos : [
        {"text" : "Breakfast at 8AM", completed : true},
        {"text" : "Office at 10AM", completed : false}]
}
      

//Reducer using Redux toolkit
const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : ({
        //Adding action
        add : (state, action) => {
            state.todos.push({
                text : action.payload,
                completed : false
            })
        },
        //This is toggling action
        toggle : (state, action) => {
            state.todos.map((todo, i) => {
                if(i === action.payload){
                    todo.completed = !todo.completed;
                }
            return todo;
            });
        }
    })
})

export const todoReducer = todoSlice.reducer;
export const todoActions =  todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;

//Reducer with react-redux
/*export function todoReducer(state = initialState,action){
    switch(action.type){
        case ADD_TODO :
            return {
                ...state,
                todos : [
                    ...state.todos,
                    {
                        text : action.text,
                        completed : false
                    }
                ]  
            }

        case TOGGLE_TODO :
            return {
                ...state,
                todos : state.todos.map((todo, i) => {
                    if(i === action.index){
                        todo.completed =! todo.completed
                    }
                    return todo;
                })
            }

        default :
            return state;
    }
}
*/
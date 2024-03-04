// import {ADD_TODO,TOGGLE_TODO} from '../actions/todoActions';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    todos : [
        {"text" : "Breakfast at 8AM", completed : true},
        {"text" : "Office at 10AM", completed : false}]
}
      
export const getInitialStateasync = createAsyncThunk('todo/getInitialState', 
        // async (_,thunkAPI) => {
        //     // try{ 
        //     // const res = await axios.get("http://localhost:4100/api/todos")
        //     //   //dispatch(todoActions.setInitialstate(res.data));
        //     //   //using Redux own dispatch function
        //     //   thunkAPI.dispatch(todoActions.setInitialstate(res.data));
        //     // }catch(error){
        //     //     console.log(error);
        //     // }
        // }
        () => {
            return axios.get("http://localhost:4100/api/todos");
        }
)

export const addTodoasync = createAsyncThunk('todo/addTodoasync', 
        async(payload) => {
            const response = await fetch("http://localhost:4100/api/todos",{
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    text : payload,
                    completed : false
                })
            });
            return response.json();

        }
)

//Reducer using Redux toolkit
const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : ({
        // //getting async from the component
        // setInitialstate : (state,action) => {
        //     state.todos = [...action.payload]
        // },
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
    }),
    extraReducers : (builder) => {
        builder.addCase(getInitialStateasync.fulfilled, (state,action) => {
            console.log(action.payload);
            state.todos = [...action.payload.data]
        })
        .addCase(addTodoasync.fulfilled, (state,action) => {
            console.log(action.payload);
            state.todos.push(action.payload);
        })
    }
})

// exported the todo reducer function and action creators here
export const todoReducer = todoSlice.reducer;
export const todoActions =  todoSlice.actions;

// exported the todo selector function here
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
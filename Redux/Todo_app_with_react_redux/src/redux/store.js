//const redux = require('redux');
// import * as redux from 'redux';
// import { combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducers';
import { noteReducer } from './reducers/noteReducers';
import { configureStore } from '@reduxjs/toolkit';
import { notificationReducer } from './reducers/notificationReducer';

// const Result = combineReducers({
//     todosReducer : todoReducer,
//     notesReducer : noteReducer
// })

// export const store = redux.createStore(Result);

export const store = configureStore({
    reducer : {
        todoReducer,
        noteReducer,
        notificationReducer
    }
})

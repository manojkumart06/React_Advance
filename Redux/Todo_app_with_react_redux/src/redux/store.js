//const redux = require('redux');
// import * as redux from 'redux';
// import { combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducers';
import { noteReducer } from './reducers/noteReducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { notificationReducer } from './reducers/notificationReducer';
import { loggerMiddleware } from './Middlewares/loggerMiddleware';

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
    },
    //need to call defualt middleware,when we use custome middleware
    middleware : [...getDefaultMiddleware(), loggerMiddleware]
})

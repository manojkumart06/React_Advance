//const redux = require('redux');
import * as redux from 'redux';
import { combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducers';
import { noteReducer } from './reducers/noteReducers';

const Result = combineReducers({
    todosReducer : todoReducer,
    notesReducer : noteReducer
})

export const store = redux.createStore(Result);

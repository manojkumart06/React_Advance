const redux = require("redux");
import { combineReducers } from "redux";
// import counter reducer function here
import { counterReducer } from "./redux/reducers/counterReducer";
const { timerReducer } = require("./redux/reducers/timerReducer");

// combine the reducer functions here
const rootReducer = combineReducers({
    timer : timerReducer,
    counter : counterReducer
})

// add the root reducer function to store here
export const store = redux.createStore(rootReducer);

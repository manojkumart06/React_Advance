// add counter action creators imports here

import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../actions/counterActions";

const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case INCREMENT_COUNT :
            return {
                ...state, count : ++state.count
            }

        case DECREMENT_COUNT :
            return {
                ...state, count : --state.count
            }

        case RESET_COUNT :
            return {
                count : 0
            }

        default :
            return state;
    }
}



// remove the counter action creators imports
// import {
//   DECREMENT_COUNTER,
//   INCREMENT_COUNTER,
//   RESET_COUNTER
// } from "../actions/counterActions";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method
const counterSlice = createSlice({
          name : 'counter',
          initialState : INITIAL_STATE,
          reducers : {
              incrementCounter: (state, action) => {
                ++state.count;
              },
              decrementCounter: (state, action) => {
                --state.count;
              },
              resetCounter: (state, action) => {
                state.count = 0;
              }
            }
})

// export the counter reducer function and action creators here
export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;




// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };



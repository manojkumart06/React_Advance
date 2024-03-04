import { createSlice } from "@reduxjs/toolkit";

// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentsSlice = createSlice({
    name : 'comments',
    initialState : INITIAL_STATE,
    reducers: {
        startFetch: (state) => {
          state.isLoading = true; // Start loading
          state.error = null; // Reset any errors
        },
        fetchSuccess: (state, action) => {
          state.comments = action.payload; // Set the comments data
          state.isLoading = false; // Stop loading
          state.error = null; // Reset any errors
        },
        fetchFailure: (state, action) => {
          state.isLoading = false; // Stop loading
          state.error = "Failed to fetch comments"// Set the error message
        },
      },
})

// export the comments reducer function and action creators here
export const commentsReducer = commentsSlice.reducer;
export const commentsActions = commentsSlice.actions;

// export the comments selector function here
export const commentsSelector = (state) =>  state.commentsReducer;

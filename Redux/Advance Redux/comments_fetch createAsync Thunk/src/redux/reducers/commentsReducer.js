import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define and export comments async thunk below
export const getInitialStateAsync = createAsyncThunk("comments/getInitialState", 
    (_, thunkAPI) => {
      const getComments = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
          );
          const data = await response.json();
          //disptach(fetchSuccess(data));
          thunkAPI.dispatch(fetchSuccess(data));
          console.log("data is ",data);
        } catch (e) {
          // disptach(fetchError());
          thunkAPI.dispatch(fetchError());
        }
      };
      getComments();
    })

const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    fetchError: (state, action) => {
      state.error = "Failed to fetch comments.";
      state.isLoading = false;
    }
  }
});

export const commentsReducer = commentsSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError } = commentsSlice.actions;

export const commentsSelector = (state) => state.commentsReducer;

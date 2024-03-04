// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteAction";

import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    notes : [{text:"included note app with the todoApp", createdOn : new Date().toDateString()}]
}

const noteSlice = createSlice({
    name : 'note',
    initialState : initialState,
    reducers : ({
        //Adding note
        add : (state, action) => {
            state.notes.push({
                text : action.payload,
                createdOn : new Date().toDateString()
            })
        },
        //Deleting note
        delete : (state, action) => {
            state.notes.splice(action.payload, 1)
        }
    })
})

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
export const noteSelector = (state) => state.noteReducer.notes;

/*export function noteReducer(state=initialState, action){
    switch(action.type){
        case ADD_NOTE :
            return{
                ...state,
                notes : [
                    ...state.notes,
                    {
                       text : action.text,
                       createdOn : new Date()
                    }
                ]  
            }

        case DELETE_NOTE :
            state.notes.splice(action.index,1);
            return{
                ...state,
                notes : [...state.notes]
                //notes : [...state.notes.filter(note => note.text !== action.text)]
            }
        
        default :
            return state;

    }
}
*/
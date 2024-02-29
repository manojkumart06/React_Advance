// import action constants here
import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS} from "../actions/fetchActions";

const INITIAL_STATE = { isLoading: false, data: [], error: null };

// define reducer function here
export const fetchReducer = (state = INITIAL_STATE, action) => {
        switch(action.type){
            case FETCH_LOADING :
                console.log("Reducer: Handling FETCH_LOADING");
                return {
                    ...state, isLoading : true
                }
            
            case FETCH_SUCCESS :
                console.log("Reducer: Handling FETCH_SUCCESS with payload:", action.payload);
                return {
                    ...state,
                    isLoading: false,
                    data : action.payload
                }

            case FETCH_ERROR :
                console.log("Reducer: Handling FETCH_ERROR with payload:", action.payload);
                return {
                    ...state,
                    error : action.payload,
                    isLoading : false           
                }

            default :
                return state
        }
};

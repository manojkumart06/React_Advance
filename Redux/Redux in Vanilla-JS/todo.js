//import redux from 'redux';

const redux = require('redux');

// Actions
const ADD_TODO = 'Add TODO';
const TOGGLE_TODO = "Toggle TODO";

//Action CREATORS

const addToDo = (text) => ({text : text, type : ADD_TODO});
const toogleToDO = (index) => ({index, type : TOGGLE_TODO});


//initial State
const initialState = {
    todos : []
}

//Reducers
//Reducers must return updated state
function todoReducer(state = initialState,action){
    switch(action.type){
        case  ADD_TODO :
            return {
                ...state,
                todos : [
                    ...state.todos,
                    {
                        text : action.text,
                        completed : false
                    }
                ]
            }

        case  TOGGLE_TODO:
            return {
                ...state,
                todos : state.todos.map((todo, i) => {
                    if(i == action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo;  //as we are using {} so returning here
                })
            }
        default:
            return state;
    }

}

//Create Store accepts reducer as argument
const store = redux.createStore(todoReducer);

//dispatch actions
store.dispatch(addToDo("Gym at 6"));
store.dispatch(addToDo("Breakfaste at 8"));
store.dispatch(toogleToDO(1));
store.dispatch(addToDo("Leaving home at 9"));
store.dispatch(toogleToDO(0));

//Reading data from store
console.log(store.getState());
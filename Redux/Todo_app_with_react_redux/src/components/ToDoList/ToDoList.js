import { useEffect } from "react";
import { getInitialStateasync, todoActions, todoSelector } from "../../redux/reducers/todoReducers";
import "./ToDoList.css";
import { useSelector,useDispatch } from "react-redux";
// import axios from "axios";
// import { toggleTodo } from "../../redux/actions/todoActions";

function ToDoList() {

  //to get the data from the store using useSelector
  const todos = useSelector(todoSelector);
  //const todos = store.getState().todos; //<<- this is not recommended as we need to import store in all the components

  //getting toggle action
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialStateasync());
    // console.log("Fetching todos..."); // Log before the fetch request
    // fetch("http://localhost:4100/api/todos")
    //   .then(res => res.json())
    //   .then(parsedJson => {
    //     console.log("Todo data received:", parsedJson); // Log after successful fetch
    //   })
    //   .catch((error) => {
    //     console.log('Unable to fetch the todos API:', error); // Log if there's an error
    //   });


    // axios.get("http://localhost:4100/api/todos")
    //   .then(res => {
    //     console.log(res.data);
    //     dispatch(todoActions.setInitialstate(res.data));
    //   })
      
  }, []);
  

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(todoActions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;

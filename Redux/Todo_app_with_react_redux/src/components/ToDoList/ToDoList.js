import { todoActions, todoSelector } from "../../redux/reducers/todoReducers";
import "./ToDoList.css";
import { useSelector,useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";

function ToDoList() {

  //to get the data from the store using useSelector
  const todos = useSelector(todoSelector);
  //const todos = store.getState().todos; //<<- this is not recommended as we need to import store in all the components

  //getting toggle action
  const dispatch = useDispatch();

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

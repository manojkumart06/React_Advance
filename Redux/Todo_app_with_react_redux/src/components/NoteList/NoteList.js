import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducers";
// import { deleteNote } from "../../redux/actions/noteAction";

function NoteList() {

    const notes = useSelector(noteSelector);
    const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={() => dispatch(noteActions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;

import React from "react";
import AddToDoForm from "../../components/toDo/AddToDoForm";
import ToDoList from "../../components/toDo/ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from "../../reducer";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const notes = useSelector((state) => state.todo.notes);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className={classes.tittle}>Bauchito's Proyect</h1>
      <AddToDoForm addNewNote={(note) => dispatch(addNote(note))} />
      <ToDoList
        deleteNote={(noteId) => dispatch(deleteNote(noteId))}
        notes={notes}
      />
    </>
  );
};

export default Home;

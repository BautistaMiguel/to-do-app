import React from "react";
import AddToDoForm from "../../components/toDo/AddToDoForm";
import ToDoList from "../../components/toDo/ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../reducer";

const Home = () => {
  const notes = useSelector((state) => state.todo.notes);
  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Bauchito's Proyect</h1>
      <AddToDoForm addNewNote={(note) => dispatch(addNote(note))} />
      <ToDoList notes={notes} />
    </>
  );
};

export default Home;

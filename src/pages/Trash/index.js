import React from "react";
import ToDoList from "../../components/toDo/ToDoList";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import useTrash from "../../hooks/useTrash";

const Trash = () => {
  const classes = useStyles();
  const notes = useSelector((state) => state.trash.notes);
  const { moveToNotes, deleteNote } = useTrash();
  console.log("trash");
  return (
    <div className={classes.body}>
      <div>
        <ToDoList
          moveToNotes={(noteId) => moveToNotes(noteId)}
          deleteNote={(noteId) => deleteNote(noteId)}
          notes={notes}
        />
      </div>
    </div>
  );
};

export default Trash;

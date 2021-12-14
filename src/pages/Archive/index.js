import React from "react";
import ToDoList from "../../components/toDo/ToDoList";
import { useSelector } from "react-redux";
import useStyles from "./styles";

import useArchive from "../../hooks/useArchive";

const Archive = () => {
  const classes = useStyles();
  const notes = useSelector((state) => state.archive.notes);
  const { moveToTrash, moveToNotes } = useArchive();

  return (
    <div className={classes.body}>
      <div></div>
      <h1 className={classes.tittle}>Archive</h1>
      <div>
        <ToDoList
          moveToNotes={(noteId) => moveToNotes(noteId)}
          deleteNote={(noteId) => moveToTrash(noteId)}
          notes={notes}
        />
      </div>
    </div>
  );
};

export default Archive;

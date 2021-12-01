import React from "react";
import Masonry from "react-masonry-css";
import Card from "./Card";
import useStyles from "./styles";

const ToDoList = ({ notes, deleteNote, moveToArchive, moveToNotes }) => {
  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
    700: 2,
    500: 1,
  };
  const classes = useStyles();
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.masonry}
      >
        {notes.map(({ note, id }) => (
          <Card
            moveToArchive={moveToArchive && (() => moveToArchive(id))}
            deleteNote={deleteNote && (() => deleteNote(id))}
            moveToNotes={moveToNotes && (() => moveToNotes(id))}
            note={note}
            key={id}
          />
        ))}
      </Masonry>
    </>
  );
};

export default ToDoList;

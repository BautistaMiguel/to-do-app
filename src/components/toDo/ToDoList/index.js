import React from "react";
import Masonry from "react-masonry-css";
import Card from "./Card";
import useStyles from "./styles";

const ToDoList = ({ notes }) => {
  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
    700: 2,
    500: 1,
  };
  const classes = useStyles();
  return (
    <>
      <h2>ToDoList</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.masonry}
      >
        {notes.map(({ note, id }) => (
          <Card note={note} key={id} />
        ))}
        {/* array of JSX items */}
      </Masonry>
    </>
  );
};

export default ToDoList;

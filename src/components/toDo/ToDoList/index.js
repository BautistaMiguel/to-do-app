import React from "react";

const ToDoList = ({ notes }) => (
  <>
    <h2>ToDoList</h2>
    <div>
      {notes.map(({ note, id }) => (
        <div key={id}>{note}</div>
      ))}
    </div>
  </>
);

export default ToDoList;

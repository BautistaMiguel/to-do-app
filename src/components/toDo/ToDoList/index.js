import React from "react";

const ToDoList = ({ notes }) => (
  <>
    <h2>ToDoList</h2>
    <div>
      {notes.map(({ note }) => (
        <div className="hardcodedData" key={note}>
          {note}
        </div>
      ))}
    </div>
  </>
);

export default ToDoList;

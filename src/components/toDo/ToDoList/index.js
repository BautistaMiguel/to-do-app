import React from "react";

const hardcodedData = [
  { title: "ASDASDSA", content: "CACACACACA" },
  { title: "ASDASDSA", content: "CACACACACA" },
  { title: "ASDASDSA", content: "CACACACACA" },
  { title: "ASDASDSA", content: "CACACACACA" },
  { title: "ASDASDSA", content: "CACACACACA" },
];

const ToDoList = () => (
  <>
    <h2>ToDoList</h2>
    <div>
      {hardcodedData.map(({ title, content }) => (
        <div className="hardcodedData" key={title}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      ))}
    </div>
  </>
);

export default ToDoList;

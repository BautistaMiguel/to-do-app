import React from "react";
import AddToDoForm from "../../components/toDo/AddToDoForm";
import ToDoList from "../../components/toDo/ToDoList";
import Counter from "../../counter";

const Home = () => (
  <>
    <h1 style={{ textAlign: "center" }}>Bauchito's Proyect</h1>
    <Counter />
    <AddToDoForm />
    <ToDoList />
  </>
);

export default Home;

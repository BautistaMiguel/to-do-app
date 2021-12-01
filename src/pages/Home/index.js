import React, { useContext } from "react";
import AddToDoForm from "../../components/toDo/AddToDoForm";
import ToDoList from "../../components/toDo/ToDoList";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Switch from "@material-ui/core/Switch";
import { themeContext } from "../../contexts/themes";
import useNotes from "../../hooks/useNotes";

const Home = () => {
  const classes = useStyles();
  const notes = useSelector((state) => state.toDo.notes);
  const { toggleTheme } = useContext(themeContext);
  const { moveToTrash, addNewNote, moveToArchive } = useNotes();

  return (
    <div className={classes.body}>
      <div className={classes.toggle}>
        <div></div>
        <h1>Bauchito's Proyect</h1>
        <Switch
          className={classes.switch}
          onChange={toggleTheme}
          color="default"
        />
      </div>
      <AddToDoForm addNewNote={(note) => addNewNote(note)} />
      <div>
        <ToDoList
          moveToArchive={(noteId) => moveToArchive(noteId)}
          deleteNote={(noteId) => moveToTrash(noteId)}
          notes={notes}
        />
      </div>
    </div>
  );
};

export default Home;

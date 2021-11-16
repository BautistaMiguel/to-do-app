import React, { useContext } from "react";
import AddToDoForm from "../../components/toDo/AddToDoForm";
import ToDoList from "../../components/toDo/ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from "../../reducer/toDo";
import useStyles from "./styles";
import Switch from "@material-ui/core/Switch";
import { themeContext } from "../../contexts/themes";
import useNotes from "../../hooks/useNotes";
import SearchAppBar from "../../components/common/AppBar";

const Home = () => {
  const classes = useStyles();
  const notes = useSelector((state) => state.toDo.notes);
  const dispatch = useDispatch();
  const { toggleTheme } = useContext(themeContext);
  const { moveToTrash } = useNotes();

  return (
    <div className={classes.body}>
      <SearchAppBar />
      <div className={classes.toggle}>
        <div></div>
        <h1>Bauchito's Proyect</h1>
        <Switch
          className={classes.switch}
          onChange={toggleTheme}
          color="default"
        />
      </div>
      <AddToDoForm addNewNote={(note) => dispatch(addNote(note))} />
      <ToDoList deleteNote={(noteId) => moveToTrash(noteId)} notes={notes} />
    </div>
  );
};

export default Home;

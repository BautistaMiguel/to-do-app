import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { v4 } from "uuid";
import useStyles from "./styles";

const AddToDoForm = ({ addNewNote }) => {
  const [note, setNote] = useState("");
  const classes = useStyles();
  return (
    <>
      <div className={classes.inputContainer} noValidate autoComplete="off">
        <TextField label="Tittle" />
        <TextField
          onChange={({ target: { value } }) => setNote(value)}
          id="standard-basic"
          label="Add Task"
          multiline
        />
        <Button
          className={classes.button}
          onClick={() => addNewNote({ note, id: v4() })}
          variant="text"
          color="primary"
        >
          Add
        </Button>
      </div>
    </>
  );
};

export default AddToDoForm;

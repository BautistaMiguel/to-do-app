import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { v4 } from "uuid";
import useStyles from "./styles";

const AddToDoForm = ({ addNewNote }) => {
  const [note, setNote] = useState("");
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.formTittle}>Hello</h2>
      <Box className={classes.form}>
        <div noValidate autoComplete="off">
          <TextField
            onChange={({ target: { value } }) => setNote(value)}
            id="standard-basic"
            label="Add Task"
          />
        </div>
        <Button
          onClick={() => addNewNote({ note, id: v4() })}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddToDoForm;

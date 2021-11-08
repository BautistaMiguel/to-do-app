import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { v4 } from "uuid";
import useStyles from "./styles";

const AddToDoForm = ({ addNewNote }) => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [showFullForm, setShowFullForm] = useState(false);
  const [tittleBlur, setTittleBlur] = useState(true);
  const [descriptionBlur, setDescriptionBlur] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setShowFullForm(!tittleBlur || !descriptionBlur);
  }, [tittleBlur, descriptionBlur]);

  return (
    <>
      <div className={classes.inputContainer} noValidate autoComplete="off">
        <InputBase
          placeholder="Tittle"
          id="title-input"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          onFocus={() => setTittleBlur(false)}
          onBlur={(e) => {
            setTittleBlur(true);
            if (e?.relatedTarget?.attributes?.id?.value === "description-input")
              setDescriptionBlur(false);
          }}
        />
        {showFullForm && (
          <>
            <InputBase
              multiline
              id="description-input"
              placeholder="Add Task..."
              value={note}
              onChange={({ target: { value } }) => setNote(value)}
              onFocus={() => setDescriptionBlur(false)}
              onBlur={(e) => {
                setDescriptionBlur(true);
                if (e?.relatedTarget?.attributes?.id?.value === "title-input")
                  setTittleBlur(false);
              }}
            />
            <Button
              className={classes.button}
              onMouseDown={() => addNewNote({ note, id: v4() })}
              variant="text"
              color="default"
            >
              Close
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default AddToDoForm;

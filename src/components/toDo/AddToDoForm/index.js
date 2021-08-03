import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const AddToDoForm = () => (
  <>
    <h2 style={{ color: "black", textAlign: "center" }}>Hello</h2>
    <Box
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        backgroundColor: "text.primary",
        color: "background.paper",
        p: 2,
      }}
    >
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Add Task" />
      </form>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </Box>
  </>
);

export default AddToDoForm;

import React from "react";
import ToDoList from "../../components/toDo/ToDoList";
import useStyles from "./styles";

import useSearch from "../../hooks/useSearch";

const Search = ({ searchTerm }) => {
  const classes = useStyles();
  const { notes } = useSearch();

  return (
    <div className={classes.body}>
      <div>
        <h1 className={classes.tittle}>Searching for: {searchTerm}</h1>
        <ToDoList notes={notes} />
      </div>
    </div>
  );
};

export default Search;

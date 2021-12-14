import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { routePaths } from "../App";

const useSearch = () => {
  const [results, setResults] = useState([]);
  const trash = useSelector((state) => state.trash.notes);
  const notes = useSelector((state) => state.toDo.notes);
  const archive = useSelector((state) => state.archive.notes);
  const { pathname, search } = useLocation();
  const query = new URLSearchParams(search);
  const searchTerm = query.get("search");

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (pathname) {
      case routePaths.home:
        setResults(notes.filter(({ note }) => note.includes(searchTerm)));
        break;

      case routePaths.archive:
        setResults(archive.filter(({ note }) => note.includes(searchTerm)));
        break;

      case routePaths.trash:
        setResults(trash.filter(({ note }) => note.includes(searchTerm)));
        break;
    }
  }, [archive, notes, pathname, searchTerm, trash]);

  return { notes: results };
};

export default useSearch;

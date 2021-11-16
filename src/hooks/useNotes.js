import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../reducer/trash";
import { deleteNote } from "../reducer/toDo";

const useNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.toDo.notes);

  return {
    moveToTrash: (noteId) => {
      const note = notes.find(({ id }) => id === noteId);
      dispatch(deleteNote(note.id));
      dispatch(addNote(note));
    },
  };
};

export default useNotes;

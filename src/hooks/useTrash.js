import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../reducer/toDo";
import { deleteNote } from "../reducer/trash";

const useTrash = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.trash.notes);

  return {
    deleteNote: (noteId) => {
      dispatch(deleteNote(noteId));
    },
    moveToNotes: (noteId) => {
      const note = notes.find(({ id }) => id === noteId);
      dispatch(deleteNote(note.id));
      dispatch(addNote(note));
    },
  };
};

export default useTrash;

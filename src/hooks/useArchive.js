import { useSelector, useDispatch } from "react-redux";
import { addNote as trashAddNote } from "../reducer/trash";
import { addNote } from "../reducer/toDo";
import { deleteNote } from "../reducer/archive";

const useArchive = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.archive.notes);

  return {
    moveToTrash: (noteId) => {
      const note = notes.find(({ id }) => id === noteId);
      dispatch(deleteNote(note.id));
      dispatch(trashAddNote(note));
    },
    moveToNotes: (noteId) => {
      const note = notes.find(({ id }) => id === noteId);
      dispatch(deleteNote(note.id));
      dispatch(addNote(note));
    },
  };
};

export default useArchive;

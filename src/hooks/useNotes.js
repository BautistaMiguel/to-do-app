import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../reducer/toDo";
import { addNote as trashAddNote } from "../reducer/trash";
import { addNote as archiveNewNote } from "../reducer/archive";
import { deleteNote } from "../reducer/toDo";

const useNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.toDo.notes);

  return {
    addNewNote: (note) => dispatch(addNote(note)),

    moveToTrash: (noteId) => {
      const note = notes.find(({ id }) => id === noteId);
      dispatch(deleteNote(note.id));
      dispatch(trashAddNote(note));
    },
    moveToArchive: (noteId) => {
      const note = notes.find(({ id }) => id === noteId);
      dispatch(deleteNote(note.id));
      dispatch(archiveNewNote(note));
    },
  };
};

export default useNotes;

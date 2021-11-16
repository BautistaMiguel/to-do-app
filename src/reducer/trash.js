import { createSlice } from "@reduxjs/toolkit";

export const trashSlice = createSlice({
  name: "trash",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, { payload: note }) => {
      state.notes.push(note);
    },
    deleteNote: (state, { payload: noteId }) => {
      state.notes = state.notes.filter(({ id }) => noteId !== id);
    },
  },
});

export const { addNote, deleteNote } = trashSlice.actions;

export default trashSlice.reducer;

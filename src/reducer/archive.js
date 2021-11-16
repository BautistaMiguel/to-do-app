import { createSlice } from "@reduxjs/toolkit";

export const archiveSlice = createSlice({
  name: "archive",
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
    archiveNote: (state, { payload: noteId }) => {
      state.notes = state.notes.filter(({ id }) => noteId !== id);
    },
  },
});

export const { addNote, deleteNote } = archiveSlice.actions;

export default archiveSlice.reducer;

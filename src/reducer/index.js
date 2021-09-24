import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
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

export const { addNote, deleteNote } = todoSlice.actions;

export default todoSlice.reducer;

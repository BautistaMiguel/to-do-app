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
  },
});

export const { addNote } = todoSlice.actions;

export default todoSlice.reducer;

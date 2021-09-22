import { configureStore } from "@reduxjs/toolkit";
import todo from "../reducer";

export default configureStore({
  reducer: {
    todo,
  },
});

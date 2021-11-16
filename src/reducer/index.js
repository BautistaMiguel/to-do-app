import toDo from "./toDo";
import archive from "./archive";
import trash from "./trash";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const getPersistConfig = (key) => ({
  key,
  storage,
  whitelist: ["notes"],
});

const rootReducer = combineReducers({
  toDo: persistReducer(getPersistConfig("toDo"), toDo),
  trash: persistReducer(getPersistConfig("trash"), trash),
  archive: persistReducer(getPersistConfig("archive"), archive),
});

export default rootReducer;

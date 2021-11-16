import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";

const storeConfig = () => {
  const store = configureStore({
    reducer,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default storeConfig;

import logger from "redux-logger";
import { allReducers } from "./contacts/reducers";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "contactsValues",
  version: 1,
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, allReducers),
  middleware,
  devtools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);

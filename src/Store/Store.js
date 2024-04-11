import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserSlice from "./Slices/UserSlice";
import EditorSlice from "./Slices/EditorSlice";
import RefreshSlice from "./Slices/RefreshSlice";
import PostSlice from "./Slices/PostSlice";

const rootReducer = combineReducers({
  User: UserSlice,
  EditorState: EditorSlice,
  RefreshState: RefreshSlice,
  PostState: PostSlice
})

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

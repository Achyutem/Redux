import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from './habitSlice'

const store = configureStore({
  reducer:{
    habits: habitsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

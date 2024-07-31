import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import todo from "./todo";

export const store = configureStore({
  reducer: {
    counter,
    todo,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todoList.push(action.payload);
    },
    editItem: (state, action) => {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteItem: (state, action) => {
      state.todoList = state.todoList.filter(item => item.id !== action.payload);
    },
  },
});

export default todoReducer.reducer;

export const { add, editItem, deleteItem } = todoReducer.actions;

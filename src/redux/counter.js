import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coun: 0,
  list: [],
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.coun += 1;
    },
    decrement: (state) => {
      state.coun -= 1;
    },
    setValue: (state, action) => {
      state.coun = action.payload;
    },
  },
});

export default counter.reducer;

export const { decrement, increment, setValue } = counter.actions;

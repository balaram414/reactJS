import { createSlice } from "@reduxjs/toolkit";
export const counterSclice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
export const { decrement, increment } = counterSclice.actions;
export default counterSclice.reducer;

// features/counterSlice.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface initialState {
  value: number;
}
const initialState: initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

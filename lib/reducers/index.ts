// reducers/index.js
import { combineReducers } from "redux";
import counterReducer from "../features/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

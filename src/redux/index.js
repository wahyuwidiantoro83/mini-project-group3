import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice"

const globalState = configureStore({
  reducer: {
    account: accountReducer,
  },
  reducer: {},
});

export default globalState;

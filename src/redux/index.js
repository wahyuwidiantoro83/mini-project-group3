import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";
import locationReducer from "./slice/locationSlice";

const globalState = configureStore({
  reducer: {
    accountReducer,
    locationReducer,
  },
});

export default globalState;

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/accountSlice";
import locationReducer from "./slice/locationSlice";

const globalState = configureStore({
  reducer: {
    account: accountReducer,
    locationReducer,
  },
  reducer: {},
});

export default globalState;

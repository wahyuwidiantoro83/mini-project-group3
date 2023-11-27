import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slice/locationSlice";

const globalState = configureStore({
  reducer: {
    locationReducer,
  },
});

export default globalState;

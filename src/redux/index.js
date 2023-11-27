import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slice/locationSlice";

const globalState = configureStore({
  reducer: {
    // reducer1,
    // reducer2,
    locationReducer,
  },
});

export default globalState;

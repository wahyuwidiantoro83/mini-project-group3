import { configureStore } from "@reduxjs/toolkit";

const globalState = configureStore({
  reducer: {
    // reducer1,
    // reducer2,
  },
});

export default globalState;

import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    username: "",
    email: "",
    token: "",
    role: "",
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    login: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    register: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.showModal = true;
    },
    logout: (state, action) => {
      state.username = "";
      state.email = "";
      state.token = "";
      state.role = "";
      state.showModal = false;
    },
  },
});

export const { setRole, register, closeModal, logout, login } = accountSlice.actions;
export default accountSlice.reducer;

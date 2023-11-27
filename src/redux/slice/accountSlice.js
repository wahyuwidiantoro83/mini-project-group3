import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    username: "",
    email: "",
    password: "",
    role: "",
    showModal: false,
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    register: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
      state.showModal = true;
    },
    logout: (state, action) => {
      state.username = "";
      state.email = "";
      state.password = "";
      state.role = "";
      state.showModal = false;
    },
  },
});

export const { setRole, register, closeModal, logout } = accountSlice.actions;
export default accountSlice.reducer;

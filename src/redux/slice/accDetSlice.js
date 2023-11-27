import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config";
import { API_URL } from "../../helper/ApiBackend";

const accountDetailSlice = createSlice({
  name: "accountDetail",
  initialState: {
    countrCode: "",
    phone: "",
    name: "",
    address: "",
    birth_date: "",
    reff_code: "",
  },
  reducers: {
    accountDetail: (state, action) => {
      state.countrCode = action.payload.countrCode;
      state.phone = action.payload.phone;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.birth_date = action.payload.birth_date;
      state.reff_code = action.payload.reff_code;
    },
  },
});

export const { accountDetail } = accountDetailSlice.actions;
export default accountDetailSlice.reducer;

// export const getAccountDetail = () => {
//     return async (dispatch) => {
//         try {
//             const response = await axiosInstance.get
//         } catch (error) {

//         }
//     }
// }

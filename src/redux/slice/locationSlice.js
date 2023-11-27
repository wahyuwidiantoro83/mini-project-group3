import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    city: "Jakarta",
  },
  reducers: {
    location: (state, action) => {
      state.city = action.payload.city;
    },
  },
});

export const { location } = locationSlice.actions;
export default locationSlice.reducer;

export const getCurrLocation = (latitude, longitude) => {
  return async (dispatch) => {
    try {
      const loc = await axios.get("https://geocodeapi.p.rapidapi.com/GetLargestCities", {
        params: {
          latitude: `${latitude}`,
          longitude: `${longitude}`,
          range: "50000",
        },
        headers: {
          "X-RapidAPI-Key": "622ba92fc2mshc83a580aba8857ap1c1369jsn5afb1fbf4a98",
          "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
        },
      });

      console.log(loc.data[0].City);

      dispatch(location({ city: loc.data[0].City }));
      sessionStorage.setItem("currLocation", loc.data[0].City);
    } catch (error) {
      console.log(error);
      dispatch(location({ city: "Jakarta" }));
    }
  };
};

import axios from "axios";

export const API_URL = axios.create({
  baseURL: "http://localhost:2066/promotor",
});
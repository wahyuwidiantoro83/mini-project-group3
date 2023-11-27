import axios from "axios";
export const API_CALL = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const getToken = () => {
    return localStorage.getItem("token");
};

export const removeToken = () => {
    return localStorage.removeItem("token");
};

export const setToken = () => {
    return localStorage.setItem( token );
};
export const API_URL = import.meta.env.VITE_API_URL;
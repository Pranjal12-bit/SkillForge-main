import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/auth",
});

export const register = (userData) => API.post("/register", userData);
export const login = (userData) => API.post("/login", userData);

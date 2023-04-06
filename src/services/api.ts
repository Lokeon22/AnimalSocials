import axios from "axios";

export const api = axios.create({
  baseURL: "https://animalsocials-api.onrender.com",
});

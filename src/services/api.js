import axios from "axios";

const apiUrl = `http://localhost:4000/api`

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


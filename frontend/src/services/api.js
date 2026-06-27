import axios from "axios";

const api = axios.create({
  baseURL: "https://devdesk-oefw.onrender.com"
});

export default api;
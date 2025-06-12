
import axios from "axios";
import { getAuthToken } from "../authService";
 
// baseURL: import.meta.env.VITE_API_BASE_URL,
 const apiClient = axios.create({
  baseURL : "/api/proxy"
   
});

apiClient.interceptors.request.use((config) => {
  const token = getAuthToken(); // Now this runs at the time of request
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const setContentType = (isFormData = false) => {
  apiClient.defaults.headers["Content-Type"] = isFormData
    ? "multipart/form-data"
    : "application/json";
};

export default apiClient;

 import axios from "axios";
import { getAuthToken } from "../authService";
 const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
     
   // "Authorization": `Bearer ${token}`, 
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const setContentType = (isFormData = false) => {
  apiClient.defaults.headers["Content-Type"] = isFormData
    ? "multipart/form-data"
    : "application/json";
};

export default apiClient;

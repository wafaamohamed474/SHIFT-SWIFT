
import axios from "axios";
import { getAuthToken } from "../authService";
 
 const apiClient = axios.create({
  baseURL : "https://shiftswift.tryasp.net/api"
   
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

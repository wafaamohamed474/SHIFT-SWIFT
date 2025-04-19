 import axios from "axios";
 const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
     
    // "Authorization": `Bearer ${token}`, 
  },
});
export const setContentType = (isFormData = false) => {
  apiClient.defaults.headers["Content-Type"] = isFormData
    ? "multipart/form-data"
    : "application/json";
};

export default apiClient;

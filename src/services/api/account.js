import apiClient, { setContentType } from "./apiClient";
import Cookies from "js-cookie";

const handleRequestLogin = async (url, data, action) => {
  try {
    setContentType(false);
    const response = await apiClient.post(url, data);
    return response.data.data;
  } catch (error) {
    console.error(`${action} Error:`, error.response?.data || error);
    throw error.response?.data || error;
  }
};
const handleRequestRegister = async (url, data, action) => {
  try {
    setContentType(true);
    await apiClient.post(url, data);
  } catch (error) {
    console.error(`${action} Error:`, error.response?.data || error);
    throw error.response?.data || error;
  }
};


// login
export const LoginMember = (data) =>
  handleRequestLogin(`/Account/LoginMember`, data, "Login Member");
export const LoginCompany = (data) =>
  handleRequestLogin(`/Account/LoginCompany`, data, "Login Company");

//register
export const RegisterMember = (data) =>
  handleRequestRegister(`/Account/RegisterMember`, data, "Register Member");
export const RegisterCompany = (data) =>
  handleRequestRegister(`/Account/RegisterCompany`, data, "Register Company");




export const getCurrentUserData = async () => {
  try {
    const response = await apiClient.get("/Account/GetCurrentUserInformation");
    const userData = response.data.data;
     
    
    Cookies.set("user_data", JSON.stringify(userData), { expires: 10 });  

    return userData;
  } catch (error) {
    console.error("Failed to get current user data:", error.response?.data || error);
    throw error.response?.data || error;
  }
};

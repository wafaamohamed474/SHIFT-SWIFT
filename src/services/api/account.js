import apiClient, { setContentType } from "./apiClient";

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

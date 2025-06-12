import {   LoginCompany, LoginMember } from "./api/account"
import Cookies from "js-cookie";
export const login = async (data , userType)=>{
    try {
        const response = userType === 'user' ? await LoginMember(data) : await LoginCompany(data)
        if (response.token){
            Cookies.set('auth_token' , response.token , {expires : 10 , secure : true})
            const userData = userType === 'user'? response.memberResponse : response.companyResponse
            // Cookies.set('user_data' , JSON.stringify(userData) , {expires : 10 , secure : true})
            Cookies.set("user_type", userType, { expires: 10, secure: true });
            return userData
        }
    } catch (error) {
        console.error("Login Error:", error.response?.data || error);
        throw error.response?.data || error;
    }
}

export const getAuthToken = () => {
    return Cookies.get("auth_token") || null;
};

export const isAuthenticated = () => {
    return !!getAuthToken(); 
    // Returns true if token exists
    //!! converts any truthy value to true and any falsy value to false
}; 

export const getUserData = () => {
    const userData = Cookies.get("user_data");
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch (error) {
        console.error("Error parsing user_data:", error);
        return null;
      }
    }
    return null;
};

 
export const getUserType = () => {
    const userType = Cookies.get("user_type");
    return userType || null
  };
 
export const logout = () => {
    Cookies.remove("auth_token");
    Cookies.remove("user_data");
    window.location.reload();
}; 

import apiClient from "./apiClient";

export const changeCompanyEmail = async(CompanyID , Email)=>{
    try{
        const response = await apiClient.post(`/Member/ChangeCompanyEmail/${CompanyID}?Email=${encodeURIComponent(Email)}`)
        return response.data
    }catch(error){
        console.error("change email fail:", error.response?.data || error)
        throw error.response?.data || error;

    }

}
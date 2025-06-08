import apiClient from "./apiClient";

export const changeCompanyEmail = async(CompanyID , Email)=>{
    try{
        const response = await apiClient.post(`/Company/ChangeCompanyEmail/${CompanyID}?Email=${encodeURIComponent(Email)}`)
        return response.data
    }catch(error){
        console.error("change email fail:", error.response?.data || error)
        throw error.response?.data || error;

    }

}

export const AddCompanyProfileData = async(data)=>{
   
    try{
        const response = await apiClient.post(`/Company/AddOrUpdateCompanyProfileData` , data)
        return response.data
    }catch(error){
        console.error("add coompany data fail:", error.response?.data || error)
        throw error.response?.data || error;
    }
}

export const GetRating = async(CompanyID)=>{
    
    try{
        const response = await apiClient.get(`/Company/GetRating/${CompanyID}`)
        return response.data
    }catch(error){
        console.error("get company rating failed:", error.response?.data || error)
        throw error.response?.data || error;
    }

}
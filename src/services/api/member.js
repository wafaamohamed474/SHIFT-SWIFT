
import apiClient from "./apiClient";


export const addEducation = async (data , MemberID)=>{

    try{
        const response = await apiClient.post(`/Member/AddOrUpdateEducation/${MemberID}` , data)
        return response.data
    }catch(error){
        console.error("Error adding education:", error.response?.data || error)
        throw error.response?.data || error;

    }

}
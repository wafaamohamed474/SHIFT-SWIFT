
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

export const getAllSavedJobs = async(MemberID)=>{
    try{
        const response = await apiClient.get(`/Member/GetAllSavedJobs/${MemberID}`)
        return response.data
    }catch(error){
        console.error("Error retreive saved jobs:", error.response?.data || error)
        throw error.response?.data || error;

    }

}
export const getAllMyJobApplications = async(MemberID)=>{
    try{
        const response = await apiClient.get(`/Member/GetAllMyJobApplications/${MemberID}`)
        return response.data
    }catch(error){
        console.error("Error retreive job applications:", error.response?.data || error)
        throw error.response?.data || error;

    }

}

export const changeMemberEmail = async(MemberID , Email)=>{
    try{
        const response = await apiClient.post(`/Member/ChangeMemberEmail/${MemberID}?Email=${encodeURIComponent(Email)}`)
        return response.data
    }catch(error){
        console.error("change email fail:", error.response?.data || error)
        throw error.response?.data || error;

    }

}


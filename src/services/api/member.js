
import apiClient from "./apiClient";
export const AddOrUpdateMemberProfileData = async ( data )=>{

    try{
        const response = await apiClient.post(`/Member/AddOrUpdateMamberProfileData` , data)
        return response.data
    }catch(error){
        console.error("Error adding profile:", error.response?.data || error)
        throw error.response?.data || error;
    }
}
export const addEducation = async ( MemberID ,data )=>{
    try{
        const response = await apiClient.post(`/Member/AddEducation/${MemberID}` , data)
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

 export const GetLastwork = async () => {
  try {
    const response = await apiClient.get("/Member/GetLastWork");
    return response.data;
  } catch (error) {
    console.error("❌ Failed to get last work:", error.response?.data || error);
    throw error.response?.data || error;
  }
};

export const AddRating = async(companyID , RatedByid , data)=>{
    try{
        const response = await apiClient.post(`/Member/AddRating/${companyID}?ratedByid=${RatedByid}` , data)
        return response.data
    }catch(error){
        console.error(" add rating failed:", error.response?.data || error)
        throw error.response?.data || error;

    }

}
//save job
export const saveJob = async (jobId, memberId) => {
  try {
    const response = await apiClient.post(`/Member/SaveJob`, null, {
      params: {
        JobId: jobId,
        MemberId: memberId
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error saving job:", error);
    throw error;
  }
};
export const applyToJob = async (jobId, memberId) => {
  try {
    const response = await apiClient.post("/Member/AddJobApplication", {
      jobId,
      memberId,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}

 export const RemoveJobFromSavedJobs  = async (jobId) => {
  try {
    const response = await apiClient.put(`/Member/RemoveJobFromSavedJobs?jobId=${jobId}`);
    return response.data;
  } catch (error) {
    console.error("❌ Failed to remove job fromm saved jobs:", error.response?.data || error);
    throw error.response?.data || error;
  }
};
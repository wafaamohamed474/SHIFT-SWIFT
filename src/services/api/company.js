import apiClient, { setContentType } from "./apiClient";
import { getAuthToken } from "../authService"; 


//  Create Job Post
export const createJobPost = async (data) => {
  try {
    const token = getAuthToken();

    const response = await apiClient.post(
      `/Company/CreateJobPost`, 
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("Error creating job post:", error);
    throw error;
  }
};


//  Get All Applicants for a Job
export const getApplicantsForJob = async (jobId) => {
  try {
    const response = await apiClient.get(`/Company/GetAllApplicantsForSpecificJob/${jobId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching applicants:", error);
    return [];
  }
};
// specificApplicantforJob
export const getSpecificApplicantForJob = async (jobId, memberId) => {
  try {
    const response = await apiClient.get("/Company/GetSpecificApplicantForSpecificJob", {
      params: {
        JobId: jobId,
        MemberId: memberId,
      },
    });

    if (response?.data?.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response?.data?.message || "Failed to fetch applicant");
    }
  } catch (error) {
    console.error("Error in getSpecificApplicantForJob:", error);
    throw error;
  }
};
//  Apply Applicant to Job
export const applyApplicant = async (jobId, data) => {
  try {
    setContentType();
    const response = await apiClient.post(`/Company/ApplyApplicant/${jobId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error applying applicant:", error.response?.data || error);
    throw error;
  }
};

//  Get All Job Posts for a Company

export const getAllJobsForCompany = async (companyId) => {
  try {
    const response = await apiClient.get(`/Company/GetAllJobPostsForCompany/${companyId}`);
    
    if (response.data.isSuccess) {
      return response.data.data;
    } else {
      console.warn("No jobs found for this company:", response.data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching company jobs:", error.response?.data || error);
    throw error.response?.data || error;
  }
};
//add to shortList
export const addToShortList = async (jobId, memberId) => {
  try {
    const response = await apiClient.post(
      `Company/ApplyApplicant/${jobId}?MemberId=${memberId}&status=4`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to add to shortlist:", error.response?.data || error.message);
    throw error;
  }
};
//accept
export const acceptApplicant = async (jobId, memberId) => {
  try {
    const response = await apiClient.post(
      `Company/ApplyApplicant/${jobId}?MemberId=${memberId}&status=2`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to accept:", error.response?.data || error.message);
    throw error;
  }
};
//reject
export const rejectApplicant = async (jobId, memberId) => {
  try {
    const response = await apiClient.post(
      `Company/ApplyApplicant/${jobId}?MemberId=${memberId}&status=3`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to reject:", error.response?.data || error.message);
    throw error;
  }
};
//reject
export const pendingApplicants = async (jobId, memberId) => {
  try {
    const response = await apiClient.post(
      `Company/ApplyApplicant/${jobId}?MemberId=${memberId}&status=1`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to reject:", error.response?.data || error.message);
    throw error;
  }
};
//remove from shortList
export const removeFromShortList = async (jobId, memberId) => {
  try {
    const response = await apiClient.post(
      `Company/ApplyApplicant/${jobId}?MemberId=${memberId}&status=5`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to remove from shortlist:", error.response?.data || error.message);
    throw error;
  }
};
//get short list applicants
export const getShortlistedApplicants = async (jobId) => {
  try {
    const response = await apiClient.get(`/Company/GetShortlistedMembers/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching shortlisted applicants:", error);
    throw error.response?.data || error;
  }
};
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

export const GetRating = async (companyId) => {
  try {
    const response = await apiClient.get(`/Company/GetRating`, {
      params: {
        companyId: companyId,
      },
    });

    return response.data.data; 
  } catch (error) {
    console.error("get company rating failed:", error.response?.data || error);
    throw error.response?.data || error;
  }
};

export const getRandomApplicants = async () => {
  try {
    const response = await apiClient.get("/Company/GetRandomApplicants");
    return response.data;
  } catch (error) {
    console.error("Error fetching random applicants:", error);
    throw error;
  }
};

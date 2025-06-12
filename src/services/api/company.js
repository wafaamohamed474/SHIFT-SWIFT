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
    return response.data;
  } catch (error) {
    console.error("Error fetching applicants:", error.response?.data || error);
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

// fetch logo
export const fetchCompanyLogo = async (companyId) => {
  try {
    const token = getAuthToken();
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/Account/GetProfilePicture/${companyId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch logo");

    const blob = await response.blob();
    const imageObjectURL = URL.createObjectURL(blob);
    return imageObjectURL;
  } catch (error) {
    console.error("Error fetching company logo:", error);
    return null;
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



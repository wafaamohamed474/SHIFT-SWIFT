import apiClient, { setContentType } from "./apiClient";
import { getAuthToken } from "../authService"; 

// 1. Create or Update Company Profile
export const addOrUpdateCompanyProfile = async (companyId, data) => {
  try {
    setContentType();
    const response = await apiClient.post(`/Company/AddOrUpdateCompanyProfileData/${companyId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating company profile:", error.response?.data || error);
    throw error;
  }
};

// 2. Create Job Post
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

  
  
// 3. Update Job Post
export const updateJobPost = async (jobId, data) => {
  try {
    setContentType();
    const response = await apiClient.put(`/Company/UpdateJobPost/${jobId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating job post:", error.response?.data || error);
    throw error;
  }
};

// 4. Delete Job Post
export const deleteJobPost = async (jobId) => {
  try {
    const response = await apiClient.delete(`/Company/DeleteJobPost/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting job post:", error.response?.data || error);
    throw error;
  }
};

// 5. Get All Applicants for a Job
export const getApplicantsForJob = async (jobId) => {
  try {
    const response = await apiClient.get(`/Company/GetAllApplicantsForSpecificJob/${jobId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching applicants:", error.response?.data || error);
    throw error;
  }
};

// 6. Apply Applicant to Job
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

// 7. Get All Job Posts for a Company

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


// 8. Change Company Email
export const changeCompanyEmail = async (companyId, data) => {
  try {
    setContentType();
    const response = await apiClient.post(`/Company/ChangeCompanyEmail/${companyId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error changing company email:", error.response?.data || error);
    throw error;
  }
};

// 9. Add Company Rating
export const addRating = async (companyId, data) => {
  try {
    setContentType();
    const response = await apiClient.post(`/Company/AddRating/${companyId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding rating:", error.response?.data || error);
    throw error;
  }
};

// 10. Get Company Rating
export const getRating = async (companyId) => {
  try {
    const response = await apiClient.get(`/Company/GetRating/${companyId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rating:", error.response?.data || error);
    throw error;
  }
};

// 11. Get My Last Work Applicants
export const getLastWorkApplicants = async (companyId) => {
  try {
    const response = await apiClient.get(`/Company/GetMyLastWorkApplicants/${companyId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching last work applicants:", error.response?.data || error);
    throw error;
  }
};

import apiClient from "./apiClient";

export const getRandomJobs = async ({
  pageNumber = 1,
  pageSize = 10,
  sortBy = 'JobType',
  sortOrder = 'asc',
  jobTypeId = 0,
  salaryTypeId = 0,
} = {}) => {
  try {
    const response = await apiClient.get('/Home/GetRandomJobs', {
      params: {
        PageNumber: pageNumber,
        PageSize: pageSize,
        SortBy: sortBy,
        SortOrder: sortOrder,
        JobTypeIdFilterValue: jobTypeId,
        SalaryTypeIdFilterValue: salaryTypeId,
      },
    });

    if (response.data?.isSuccess && response.data?.data?.data) {
      return response.data.data.data;
    } else {
      console.error('API Error:', response.data.message);
      return [];
    }
  } catch (error) {
    console.error('Network/API Error:', error);
    return [];
  }
};


export const getJobDetails = async (jobId) => {
  const response = await apiClient.get(`/Home/GetJobPostById/${jobId}`);
  return response.data;
};
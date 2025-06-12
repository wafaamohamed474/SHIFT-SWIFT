import apiClient from "./apiClient";

export const getRandomJobs = async () => {
  try {
    const response = await apiClient.get('/Home/GetRandomJobs', {
      params: {
        PageNumber: 1,
        PageSize: 4,
        SortBy: 'JobType',
        SortOrder: 'asc',
        JobTypeIdFilterValue: 0,
        SalaryTypeIdFilterValue: 0,
      },
    });

    if (response.data.isSuccess) {
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
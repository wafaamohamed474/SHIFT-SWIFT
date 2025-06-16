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
//Search
export const searchJobs = async ({
  searchTitle = '',
  searchLocation = '',
  pageNumber = 1,
  pageSize = 10,
  sortBy = 'latest',
  jobTypeIdFilterValue = 0,
  minSalary = 0,
  maxSalary = 0,
}) => {
  const response = await apiClient.get('/Member/SearchJobs', {
    params: {
      search: searchTitle,
      area: searchLocation,
      pageNumber,
      pageSize,
      sortBy,
      jobTypeIdFilterValue,
      minSalary,
      maxSalary,
    },
  });
  return response.data.data.data;
};





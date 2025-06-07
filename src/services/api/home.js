import apiClient from "./apiClient";
//get random jobs
// export const getRandomJobs = async ({
//     pageNumber = 1,
//     pageSize = 10,
//     sortBy = "JobType",
//     sortOrder = "asc",
//     jobTypeIdFilterValue = 0,
//     salaryTypeIdFilterValue = 0,
//   } = {}) => {
//     try {
//       const response = await apiClient.get("/Home/GetRandomJobs", {
//         params: {
//           PageNumber: pageNumber,
//           PageSize: pageSize,
//           SortBy: sortBy,
//           SortOrder: sortOrder,
//           JobTypeIdFilterValue: jobTypeIdFilterValue,
//           SalaryTypeIdFilterValue: salaryTypeIdFilterValue,
//         },
//       });
  
//       if (response.data.isSuccess) {
//         return response.data.data;
//       } else {
//         console.warn("No jobs found:", response.data.message);
//         return [];
//       }
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//       throw error;
//     }
//   };
  
  export const getRandomJobs  = async(jobId)=>{
    try{
        const response = await apiClient.get(`/Home/GetRandomJobs/${jobId}`)
        if (response.data.isSuccess) {
          return response.data.data;
        } else {
          console.warn("No jobs found:", response.data.message);
          return [];
        }
    }catch(error){
        console.error("Error fetching jobs :", error.response?.data || error)
        throw error.response?.data || error;

    }

}
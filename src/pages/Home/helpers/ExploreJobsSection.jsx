import { useEffect, useState } from "react";
import { getRandomJobs } from "../../../services/api/home";
import Image from "../../../assets/image 4.png";
import Vector from "../../../assets/Vector_tech.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faMoneyBillWave,
  faBookmark,
  faStar,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
function ExploreJobsSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockJobs = [
      {
        title: "Frontend Developer",
        companyName: "Tech Solutions Inc.",
        location: "Cairo, Egypt",
        jobType: "Full-Time",
        salary: "EGP 15,000",
        rating: 4.5,
        reviews: 32,
      },
      {
        title: "Backend Engineer",
        companyName: "ShiftSwift",
        location: "Alexandria, Egypt",
        jobType: "Part-Time",
        salary: "EGP 10,000",
        rating: 4.2,
        reviews: 21,
      },
      {
        title: "UI/UX Designer",
        companyName: "Creative Minds",
        location: "Online",
        jobType: "Remote",
        salary: "EGP 12,000",
        rating: 4.8,
        reviews: 45,
      },
    ];
  
    setJobs(mockJobs);
    setLoading(false);
  }, []);
  
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const res = await getRandomJobs();
  //       if (res && res.isSuccess && res.data.length > 0) {
  //          setJobs(res.data.slice(0, 6)); // to view 6 jobs
  //       } else {
  //         console.log("API is working, but no jobs found.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching jobs:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchJobs();
  // }, []);

  return (
    <div className="container border-t border-border-color pb-20">
      <div className="flex flex-col items-center text-center">
        <h6 className="font-bold text-2xl w-[300px] lg:text-4xl lg:py-20 py-10 lg:w-[600px]">
          Explore the Right Jobs and Career Opportunities
        </h6>
      </div>
      {loading ? (
        <p className="text-center text-main-color">Loading...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-red-500">No jobs Right found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
          {jobs.map((job, index) => (
            <div key={index} className="bg-secondary-color rounded-lg w-full p-3">
              <div className="flex">
                <div>
                  <div className="w-28 h-5 bg-main-color rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="text-white text-sm mr-1" />
                    <p className="text-white text-xs">Trending Now</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-lg mr-2">{job.title}</h1>
                    <span>
                    {/* <FontAwesomeIcon icon={faCircleCheck} className="text-main-color w-4 h-4" /> */}
                    <img src={Vector}/>
                    </span>
                  </div>
                  <p className="text-sm">{job.companyName}</p>
                </div>
                <span className="bg-white h-20 w-20 rounded-xl ml-auto">
                  <img className="" src={Image} alt="Company Logo" />
                </span>
              </div>
              <div className="bg-border-color w-2/3 mx-auto my-4 h-[1px]"></div>
              <div>
                <span className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-dark-text mr-2 mt-1" />
                  <h6 className="text-md">{job.location}</h6>
                </span>
                <span className="flex">
                <FontAwesomeIcon icon={faClock} className="text-dark-text mr-2 mt-1" />
                  <h6 className="text-md">{job.jobType}</h6>
                </span>
                <span className="flex">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-dark-text mr-2 mt-1" />
                  <h6 className="text-md">{job.salary}</h6>
                </span>
                <span className="flex pb-1 text-center items-center">
                {job.rating}<FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
                  <h6 className="text-main-color ml-2">
                    ({job.reviews} <span>Reviews</span>)
                  </h6>
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon icon={faBookmark} className="text-main-color mr-2" />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="border-b-[1px] border-main-color w-48 lg:w-56 text-main-color ml-auto lg:pt-5">
        <a href="/home">See other jobs in SHIFT SWIFT</a>
      </div>
    </div>
  );
}

export default ExploreJobsSection;

import { useEffect, useState } from "react";
import { getRandomJobs } from "../../../services/api/home";
import Image from "../../../assets/userLogo.jpg";
import Vector from "../../../assets/Vector_tech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faMoneyBillWave,
  faBookmark,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

function ExploreJobsSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const jobTypeReverseMap = {
  1: "Full Time",
  2: "Part Time",
  3: "Freelance",
};
const salaryTypeReverseMap = {
    1: "Per Month",
    2: "Per Hour",
    3: "Contract",
  };
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getRandomJobs();
        console.log("API Response:", res);
        if (Array.isArray(res) && res.length > 0) {
          setJobs(res.slice(0, 6));
        } else {
          console.log("API is working, but no jobs found.");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
        <p className="text-center text-red-500">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
          {jobs.map((job, index) => (
            <div key={index} className="bg-fill-bg-color border border-border-color rounded-lg w-full p-3">
              <div className="flex">
                <div>
                  <div className="w-fit py-[2px] px-2  bg-main-color rounded-md flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-white text-xs font-semibold mr-1" />
                    <p className="text-white text-[10px] font-semibold">Trending Now</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="font-semibold text-3xl truncate max-w-[150px] mr-2">{job.title}</h1>
                    <span>
                      <img src={Vector} className="w-5" alt="Verified" />
                    </span>
                  </div>
                  <p className="text-sm font-semibold">{job.companyFirstName + " " + job.companyLastName}</p>
                </div>
                <span className="bg-white h-20 w-20 rounded-xl ml-auto overflow-hidden flex items-center justify-center">
                  <img
                  className="object-cover w-full h-full rounded-xl"
                  src={job.companyPictureUrl || Image}
                  alt="Company Logo"
                  />
              </span>

              </div>

              <div className="bg-border-color w-2/3 mx-auto my-4 h-[1px]"></div>

              <div className="space-y-1">
                <span className="flex items-center text-sm font-semibold">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-dark-text mr-2 mt-1" />
                  <h6 >{job.location}</h6>
                </span>
                <span className="flex items-center text-sm font-semibold">
                  <FontAwesomeIcon icon={faClock} className="text-dark-text mr-2 mt-1" />
                  <h6 >{jobTypeReverseMap[job.jobTypeTd]}</h6>
                </span>
                <span className="flex items-center text-sm font-semibold">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-dark-text mr-2 mt-1" />
                  <h6 >{job.salary + " EGP/" +salaryTypeReverseMap[job.salaryTypeId]}</h6>
                </span>
              </div>

              <div className="flex gap-4 items-center justify-center mt-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center"
                onClick={() => navigate("/register-user")}>
                  <FontAwesomeIcon icon={faBookmark} className="text-main-color mr-2" />
                  <span className="text-main-color"
                  >Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center"
                onClick={() => navigate("/register-user")}>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-b-[1px] border-main-color w-48 lg:w-56 text-main-color ml-auto lg:pt-5">
        <a href="/register-user">See other jobs in SHIFT SWIFT</a>
      </div>
    </div>
  );
}

export default ExploreJobsSection;

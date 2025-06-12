import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleCheck,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { getUserData } from "../../../services/authService";
import { getAllMyJobApplications } from "../../../services/api/member";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { memberId } = getUserData();

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await getAllMyJobApplications(memberId);
        const jobs = Array.isArray(response) ? response : response?.data || [];
        setAppliedJobs(jobs);
      } catch (err) {
        console.error(err.message || "Something went wrong");
        setAppliedJobs([]); // fallback to empty array
      }
    };
    fetchJobApplications();
  }, [memberId]);

  return (
    <div className="w-full mt-7">
      {appliedJobs.length === 0 ? (
        <p>No job applications found.</p>
      ) : (
        appliedJobs.map((job) => (
          <div key={job.jobId} className="border-b border-border-color mb-5">
            <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-2 border border-border-color">
              {/* Header */}
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h2 className="font-semibold text-3xl">{job.title}</h2>
                  <span className="text-dark-text text-sm font-semibold">
                    {job.description}
                  </span>
                </div>
                <div className="w-16 h-16">
                  <img src={job.companyLogo} alt="Company Logo" />
                </div>
              </div>

              {/* Job Info */}
              <div className="flex justify-between items-start">
                <div>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-sm text-dark-text pr-3"
                  />
                  <span className="text-sm font-semibold">{job.location}</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-sm text-dark-text pr-3"
                  />
                  <span className="text-sm font-semibold">
                    {job.jobTypeTd === 1
                      ? "Full Time"
                      : job.jobTypeTd === 2
                      ? "Part Time"
                      : job.jobTypeTd === 3
                      ? "Freelancer"
                      : "Unknown"}
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faMoneyBill1}
                    className="text-sm text-dark-text pr-3"
                  />
                  <span className="text-sm font-semibold">{job.salary}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="px-1 rounded bg-orange-50 mr-2">
                    <span className="text-sm font-semibold">{job.rating}</span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm text-yellow-400 pl-2"
                    />
                  </div>
                  <span className="text-sm font-semibold text-main-color">
                    ({job.reviewsCount} reviews)
                  </span>
                </div>
              </div>

              {/* Application Date */}
              <div className="mt-5 flex bg-green-400 bg-opacity-20 items-center w-fit px-3 py-1 rounded">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-700 mr-2"
                />
                <span className="text-sm">
                  Application Sent {job.applicationSentDaysAgo} days ago
                </span>
              </div>
            </div>

            {/* Status Section (empty for now) */}
            <div className="rounded-md bg-fill-bg-color w-full p-4 mb-5 border border-border-color">
              <div className="flex justify-between items-start mb-5">
                <h2 className="font-semibold text-3xl">Application Status</h2>
              </div>
              {/* Add status details here if needed */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AppliedJobs;

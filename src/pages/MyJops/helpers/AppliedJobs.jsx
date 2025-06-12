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
                  <img src={job.companyPictureUrl} alt="Company Logo" />
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
                    {job.jobType === 1
                      ? "Full Time"
                      : job.jobType === 2
                      ? "Part Time"
                      : job.jobType === 3
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
                    <span className="text-sm font-semibold">
                      {job?.averageRating?.averageScore
                        ? job.averageRating.averageScore
                        : "0"}
                    </span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm text-yellow-400 pl-2"
                    />
                  </div>
                  <span className="text-sm font-semibold text-main-color">
                    {job?.averageRating?.numberOfRating
                      ? `(${job.averageRating.numberOfRating} reviews)`
                      : "(0 reviews)"}
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
                  Application Sent {job.postedOn} days ago
                </span>
              </div>
            </div>

            <div className="rounded-md bg-fill-bg-color w-full p-4 mb-5 border border-border-color">
              <div className="flex justify-between items-start mb-5">
                <h2 className="font-semibold text-3xl">Application Status</h2>
              </div>

              {/* Stepper */}
              <div className="flex flex-col space-y-6 relative ml-2">
                {[
                  { label: "Application Sent", code: 1 },
                  { label: "Application viewed by recruiter", code: 4 },
                  { label: "", code: 0 },
                ].map((step, index, arr) => {
                  const activeIndex = arr.findIndex(
                    (s) => s.code === job.jobApplicationStatus
                  );
                  const isPast = index < activeIndex;
                  const isActive = index === activeIndex;
                  const isFuture = index > activeIndex;

                  return (
                    <div className="flex items-center relative" key={step.code}>
                      {/* Vertical line */}
                      {index < arr.length - 1 && (
                        <span className="absolute left-4 top-6 h-full w-0.5 bg-gray-300"></span>
                      )}

                      {/* Circle */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                          isPast
                            ? "bg-green-600 text-white"
                            : isActive
                            ? "bg-green-600"
                            : "bg-gray-300"
                        }`}
                      >
                        {isPast ? "✔" : ""}
                      </div>

                      {/* Text */}
                      <span className="ml-4 text-sm font-medium text-gray-800">
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AppliedJobs;
